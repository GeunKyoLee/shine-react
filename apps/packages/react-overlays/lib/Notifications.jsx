
const { CSSTransitionGroup } = React.addons;

const Notification = React.createClass({
  componentDidMount() {
    Meteor.setTimeout(() => {
      console.log('remove _id: ' + this.props.id);
      Overlay.notificationsCollection.remove(this.props.id);
    }, 5000);
  },

  render() {
    return (
      <div className="alert alert-info">{this.props.children}</div>
    )
  }
});

Overlay.NotificationsContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      list:  Overlay.notificationsCollection.find({}, { sort: { createdAt: -1 }}).fetch()
    }
  },

  getDefaultProps() {
    return {
      id: 'notifications-container'
    }
  },

  notificationsList() {
    return this.data.list.map((item, i) => {
      console.log('render _id: ' + item._id);
      return (
        <Notification key={i} id={item._id}>{item.message}</Notification>
      )
    });
  },

  render() {
    const props = {
      transitionName: "page",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    };

    return (
      <CSSTransitionGroup {...props} component="div" id={this.props.id}>
        {this.notificationsList()}
      </CSSTransitionGroup>
    )
  }
});
