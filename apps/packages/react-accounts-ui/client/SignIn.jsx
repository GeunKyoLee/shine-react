
const { Link } = ReactRouter;

Accounts.SignIn = React.createClass({
  componentDidMount() {
    $('#username').focus();
  },

  fields() {
    return [
      {
        name: 'username-or-email',
        label: I18n.get('accounts-ui:label_username_or_email'),
        visible() {
          return _.contains(
            ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'username',
        label: I18n.get('accounts-ui:label_username'),
        visible() {
          return Accounts.ui.passwordSignupFields() === "USERNAME_ONLY";
        }
      },
      {
        name: 'email',
        label: I18n.get('accounts-ui:label_email'),
        type: 'email',
        visible() {
          return Accounts.ui.passwordSignupFields() === "EMAIL_ONLY";
        }
      },
      {
        name: 'password',
        label: I18n.get('accounts-ui:label_password'),
        type: 'password',
        visible() {
          return true;
        }
      }
    ];
  },

  errors() {
    const errors = this.props.errors.map((item, i) => {
      const message = (typeof item === 'string') ? item : item.reason;
      return <p key={i}>{L(`accounts-ui:${message}`)}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  handleSubmit(e) {
    e.preventDefault();

    const user = (e.target['username-or-email'] &&
      e.target['username-or-email'].value) ||
      (e.target.username && e.target.username.value) ||
      (e.target.email && e.target.email.value);

    return this.props.handleSubmit(user, e.target.password.value);
  },

  renderInputs() {
    return this.fields().map((item, i) => {
      return (item.visible()) ? <Accounts.Input key={i} {...item} /> : null;
    })
  },

  render() {
    return (
      <App.Page>
        <App.Header title={L('accounts-ui:label_sign_in')} />

        <main className="content">
          <div className="accounts-ui-frame">
            <Form.Form id="form-sign-in" onSubmit={this.handleSubmit}>

              {this.errors()}

              {this.renderInputs()}

              <Link to="/forgot-password">{L('accounts-ui:label_forgot_password')}</Link>

              <Form.Button className="btn btn-primary btn-block">
                {L('accounts-ui:label_sign_in')}
              </Form.Button>
            </Form.Form>

            <Link to="/sign-up">{L('accounts-ui:label_sign_up')}</Link>
          </div>
        </main>
      </App.Page>
    )
  }
});
