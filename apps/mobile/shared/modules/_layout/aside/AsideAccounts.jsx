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
    const username = userDisplayName(this.props.user);
    const pictureURL = userPictureURL(this.props.user);

    return (
      <div className="account-info">
        <Link to="/profile">
          <div className="ctn-profile">
            <div className="ctn-profile-image">
              <img className="img-circle" src={pictureURL} />
            </div>
            <p className="profile-username"> {username}</p>
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
    return this.data.user ?
      <AccountInfo user={this.data.user} /> : <SignInButton />;
  }
});
