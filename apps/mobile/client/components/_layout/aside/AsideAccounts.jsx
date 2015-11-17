
const { Link } = ReactRouter;

const SignInButton = React.createClass({
  render() {
    return (
      <div className="account-info">
        <Link to="/sign-in">
          <p>{L('accounts-ui:label_sign_in')}</p>
        </Link>
      </div>
    )
  }
});

const AccountInfo = React.createClass({
  render() {
    return (
      <div className="account-info">
        <Link to="/profile">
          <p>{this.props.username}</p>
        </Link>
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
