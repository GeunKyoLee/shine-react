
Account.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('accountsList');

    return {
      loading: (! handle.ready()),
      accounts: Meteor.users.find({}, { sort: { createdAt: -1 }}).fetch(),
    }
  },

  render() {
    return (
      <Account.List {...this.data} />
    )
  }
});