
const { Link } = ReactRouter;

Accounts.SignUp = React.createClass({
  fields() {
    return [
      {
        name: 'username',
        label: I18n.get('accounts-ui:label_username'),
        visible() {
          return _.contains(
            [
              "USERNAME_AND_EMAIL",
              "USERNAME_AND_OPTIONAL_EMAIL",
              "USERNAME_ONLY"
            ],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'email',
        label: I18n.get('accounts-ui:label_email'),
        type: 'email',
        visible() {
          return _.contains(
            [
              "USERNAME_AND_EMAIL",
              "EMAIL_ONLY"
            ],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'email',
        label: I18n.get('accounts-ui:label_email_optional'),
        type: 'email',
        visible() {
          return Accounts.ui.passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";
        }},
      {
        name: 'password',
        label: I18n.get('accounts-ui:label_password'),
        type: 'password',
        visible() {
          return true;
        }},
      {
        panme: 'password-again',
        label: I18n.get('accounts-ui:label_password_again'),
        type: 'password',
        visible() {
          // No need to make users double-enter their password if
          // they'll necessarily have an email set, since they can use
          // the "forgot password" flow.
          return _.contains(
            [ "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY" ],
            Accounts.ui.passwordSignupFields());
        }
      },
    ];
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

  renderInputs() {
    return this.fields().map((item, i) => {
      return (item.visible()) ? <Accounts.Input key={i} {...item} /> : null;
    })
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('accounts-ui:label_sign_up')} />

        <div id="sign-up">
          <Form.Form id="form-sign-up" onSubmit={this.props.onSubmit}>

            {this.errors()}

            {this.renderInputs()}

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
