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
          <div className="ctn-profile">
            <div className="ctn-profile-image">
              <img className="img-circle" src="http://dummyimage.com/100x100/000/fff"/>
            </div>
            <p className="profile-username"> {this.props.username}</p>

          </div>
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

    return username ? <AccountInfo username={username}/> : <SignInButton />;
  }
});
