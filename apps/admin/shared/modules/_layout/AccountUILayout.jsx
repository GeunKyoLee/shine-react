
Account.UILayout = React.createClass({
  render() {
    return (
      <div id="container">
        <App.Header title={this.props.title} hideAccount={true} />

        <App.Page>
          <article className="page">{this.props.children}</article>
        </App.Page>
      </div>
    )
  }
});

Account.SignInContainer = React.createClass({
  render() {
    return (
      <Account.UILayout title={L('accounts-ui:label_sign_in')}>
        <Accounts.ui.SignInContainer {...this.props} />
      </Account.UILayout>
    )
  }
});

Account.SignUpContainer = React.createClass({
  render() {
    return (
      <Account.UILayout title={L('accounts-ui:label_sign_up')}>
        <Accounts.ui.SignUpContainer {...this.props} />
      </Account.UILayout>
    )
  }
});

Account.ForgotPasswordContainer = React.createClass({
  render() {
    return (
      <Account.UILayout title={L('accounts-ui:label_forgot_password')}>
        <Accounts.ui.ForgotPasswordContainer {...this.props} />
      </Account.UILayout>
    )
  }
});

Account.ResetPasswordContainer = React.createClass({
  render() {
    return (
      <Account.UILayout title={L('accounts-ui:label_reset_password')}>
        <Accounts.ui.ResetPasswordContainer {...this.props} />
      </Account.UILayout>
    )
  }
});
