
const { Link } = ReactRouter;

Accounts.ResetPassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const password = e.target.password.value;
    const passwordConfirm = e.target['password-confirm'].value;

    if (password !== passwordConfirm) {
      return Overlay.notify('password confirm fail');
    }

    this.props.onSubmit(password);
  },

  componentDidMount() {
    $('#password').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('accounts-ui:label_reset_password')} />

        <main className="content">
          <div className="accounts-ui-frame">
            <Form.Form id="form-reset-password" onSubmit={this.handleSubmit}>
              <Form.InputText id="password"
                              name="password"
                              placeholder={L('accounts-ui:label_password')} />

              <Form.InputText id="password-confirm"
                              name="password-confirm"
                              placeholder={L('accounts-ui:label_password_again')} />

              <Form.Button className="btn btn-primary btn-block">
                {L('accounts-ui:label_reset_password')}
              </Form.Button>
            </Form.Form>
          </div>
        </main>
      </App.Page>
    )
  }
});
