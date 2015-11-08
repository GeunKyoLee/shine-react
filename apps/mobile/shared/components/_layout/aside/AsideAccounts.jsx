
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
    return (
      <div className="account-info">
        <p>{this.props.username}</p>

        <button className="btn btn-default" onClick={this.signOut}>
          {L('command_sign_out')}
        </button>
      </div>
    )
  }
});

App.AsideAccounts = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  render() {
    const username = userDisplayName(this.data && this.data.user);

    return username ? <AccountInfo username={username} /> : <SignInButton />;
  }
});
