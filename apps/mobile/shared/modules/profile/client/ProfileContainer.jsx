
const { History } = ReactRouter;

App.ProfileContainer = React.createClass({
  mixins: [History, ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  handleSignOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },
/*
  componetWillMount() {
    if (! this.data.user) {
      return Accounts.ui.Popup('sign-in').then((value) => {});
    }
  },
*/
  render() {

    return (
      <App.Profile {...this.data} onSignOut={this.handleSignOut} />
    )
  }
});
