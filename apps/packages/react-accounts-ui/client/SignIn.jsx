
const { Link } = ReactRouter;

Accounts.ui.SignIn = React.createClass({

  hasOtherServices() {
    return Accounts.ui.getSignInServices().length > 1;
  },

  render() {
    const oauthServices = Accounts.ui.getOAuthServices().map((service, i) => {
      return (
        <Accounts.ui.SignInOtherServices key={i} name={service} />
      );
    });

    const passwordService = Accounts.ui.hasPasswordService() ? (
      <Accounts.ui.SignInPasswordService {...this.props}
        onSubmit={this.props.handleSubmit} />
    ) : null;

    const separator = oauthServices && passwordService ? (
      <div className="separator"></div>
    ) : null;

    return (
      <div className="accounts-ui-frame">

        {oauthServices}

        {separator}

        {passwordService}

        <Link to="/sign-up" className="btn btn-link" >
          {L('accounts-ui:label_sign_up')}
        </Link>
      </div>
    )
  }
});
