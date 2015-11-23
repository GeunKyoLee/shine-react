
const { History } = ReactRouter;

App.ProfileContainer = React.createClass({
  mixins: [History, ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('system', 'cloudinary');

    return {
      loading: (! handle.ready()),
      user: Meteor.user(),
      cloudinary: System.findOne({ _id: 'cloudinary' }),
    }
  },

  handleSignOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },

  render() {
    if (this.data.loading) return <App.Spinner />;

    return (
      <App.Profile {...this.data} onSignOut={this.handleSignOut} />
    )
  }
});
