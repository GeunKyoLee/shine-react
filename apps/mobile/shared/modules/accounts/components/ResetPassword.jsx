
const { Link } = ReactRouter;

Accounts.ResetPassword = React.createClass({
  componentDidMount() {
    $('#password').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('title_reset_password')} />

        <div id="reset-password">
          <Form.Form id="form-reset-password" onSubmit={this.props.onSubmit}>
            <Form.InputText id="password"
                            name="password"
                            placeholder={L('text_placeholder_password')} />

            <Form.InputText id="password-confirm"
                            name="password-confirm"
                            placeholder={L('text_placeholder_password_confirm')} />

            <Form.Button className="btn btn-primary btn-block">
              {L('command_submit')}
            </Form.Button>
          </Form.Form>
        </div>
      </App.Page>
    )
  }
});
