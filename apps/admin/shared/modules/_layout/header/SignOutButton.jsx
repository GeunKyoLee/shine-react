const { History } = ReactRouter;

SignOutButton = React.createClass({
  mixins: [History],

  handleSignOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },

  render() {
    return (
      <button className="btn btn-default" onClick={this.handleSignOut}>
        {L('command_sign_out')}
      </button>    )
  }
});
