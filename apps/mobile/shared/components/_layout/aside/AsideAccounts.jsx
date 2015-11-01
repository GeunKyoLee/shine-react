
const { Link } = ReactRouter;

const SignInButton = React.createClass({
  render() {
    return (
      <div className="account-info">
        <Link to="/sign-in">{L('label_sign_in')}</Link>
      </div>
    )
  }
});

const AccountInfo = React.createClass({
  signOut() {
    Meteor.logout();
  },

  render() {
    const user = Meteor.user();

    return (
      <div className="account-info">
        <p>{user && user.username}</p>

        <button className="btn btn-default" onClick={this.signOut}>
          {L('command_sign_out')}
        </button>
      </div>
    )
  }
});

App.AsideAccounts = React.createClass({
  getInitialState() {
    return {
      user: () => Meteor.user()
    }
  },

  render() {
    return (this.state.user()) ? <AccountInfo /> : <SignInButton />;
  }
});
