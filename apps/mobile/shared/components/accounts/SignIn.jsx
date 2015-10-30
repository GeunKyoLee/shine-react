
Accounts.SignIn = React.createClass({
  componentDidMount() {
    $('#username').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('title_sign_in')} />

        <div id="sign-in">
          <Form.Form id="form-sign-in">
            <Form.InputText id="username"
                            name="username"
                            placeholder={L('text_placeholder_username')} />
            <Form.InputText type="password" name="password" />

            <Form.Button className="btn btn-primary btn-block">
              {L('command_sign_in')}
            </Form.Button>
          </Form.Form>
        </div>
      </App.Page>
    )
  }
});
