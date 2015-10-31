
const { Link } = ReactRouter;

Accounts.SignUp = React.createClass({
  componentDidMount() {
    $('#username').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('title_sign_up')} />

        <div id="sign-up">
          <Form.Form id="form-sign-up" onSubmit={this.props.onSubmit}>
            <Form.InputText id="username"
                            name="username"
                            placeholder={L('text_placeholder_username')} />
            <Form.InputText type="password"
                            name="password"
                            placeholder={L('text_placeholder_password')} />

            <Form.Button className="btn btn-primary btn-block">
              {L('command_sign_up')}
            </Form.Button>
          </Form.Form>

          <Link to="/sign-in">{L('command_sign_in')}</Link>
        </div>
      </App.Page>
    )
  }
});
