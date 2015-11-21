
const { Link } = ReactRouter;

Accounts.ForgotPassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;

    this.props.onSubmit(email);
  },

  errors() {
    const errors = this.props.errors.map((item, i) => {
      const message = (typeof item === 'string') ? item : item.reason;
      return <p key={i}>{L(`accounts-ui:${message}`)}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  componentDidMount() {
    $('#username').focus();
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('accounts-ui:label_forgot_password')} />

        <article className="page">
          <div className="accounts-ui-frame">
            <Form.Form id="form-forgot-password" onSubmit={this.handleSubmit}>

              {this.errors()}

              <Form.InputText id="email"
                              name="email"
                              placeholder={L('accounts-ui:text_input_email')} />

              <Form.Button type="submit"
                           className="btn btn-primary btn-block">
                {L('accounts-ui:label_reset_password')}
              </Form.Button>
            </Form.Form>

            <Link to="/sign-in">{L('command_sign_in')}</Link>
          </div>
        </article>
      </App.Page>
    )
  }
});
