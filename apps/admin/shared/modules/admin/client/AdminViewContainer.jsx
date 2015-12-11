
Admin.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const adminId = this.props.params.id;

    const handle = Meteor.subscribe('adminView', adminId);

    const admin = Meteor.users.findOne(adminId);

    return {
      loading: (! handle.ready()),
      admin,
    }
  },

  render() {
    return (
      <Admin.View {...this.data} />
    )
  }
});
