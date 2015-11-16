
const { Link } = ReactRouter;

Accounts.ForgotPassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;

    this.props.onSubmit(email);
  },

  errors() {
    const errors = this.props.errors.map((item, i) => {
      return <p key={i}>{item.reason}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  componentDidMount() {
    $('#username').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('title_forgot_password')} />

        <div id="forgot-password">
          <Form.Form id="form-forgot-password" onSubmit={this.handleSubmit}>

            {this.errors()}

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
