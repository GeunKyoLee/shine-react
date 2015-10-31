
const { Link } = ReactRouter;

Accounts.ForgotPassword = React.createClass({
  componentDidMount() {
    $('#username').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('title_forgot_password')} />

        <div id="forgot-password">
          <Form.Form id="form-forgot-password" onSubmit={this.props.onSubmit}>
            <Form.InputText id="email"
                            name="email"
                            placeholder={L('text_placeholder_email')} />

            <Form.Button className="btn btn-primary btn-block">
              {L('command_submit')}
            </Form.Button>
          </Form.Form>

          <Link to="/sign-in">{L('command_sign_in')}</Link>
        </div>
      </App.Page>
    )
  }
});
