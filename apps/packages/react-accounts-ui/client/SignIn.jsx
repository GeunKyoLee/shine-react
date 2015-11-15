
const { Link } = ReactRouter;

Accounts.SignIn = React.createClass({
  componentDidMount() {
    $('#username').focus();
  },

  fields() {
    return [
      {
        name: 'username-or-email',
        ref: 'username-or-email',
        label: I18n.get('accounts-ui:label_username_or_email'),
        visible() {
          return _.contains(
            ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'username',
        ref: 'username',
        label: I18n.get('accounts-ui:label_username'),
        visible() {
          return Accounts.ui.passwordSignupFields() === "USERNAME_ONLY";
        }
      },
      {
        name: 'email',
        ref: 'email',
        label: I18n.get('accounts-ui:label_email'),
        type: 'email',
        visible() {
          return Accounts.ui.passwordSignupFields() === "EMAIL_ONLY";
        }
      },
      {
        name: 'password',
        ref: 'password',
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
      return <p key={i}>{item.reason}</p>;
    });

    return (! _.isEmpty(errors)) ? <Form.Alert>{errors}</Form.Alert> : null;
  },

  handleSubmit(e) {
    e.preventDefault();

    return this.props.handleSubmit(e.target.email.value, e.target.password.value);
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

        <article className="page">
          <div className="accounts-ui-frame">
            <Form.Form id="form-sign-in" onSubmit={this.handleSubmit}>

              {this.errors()}

              {this.renderInputs()}

              <Form.Button className="btn btn-primary btn-block">
                {L('accounts-ui:label_sign_in')}
              </Form.Button>
            </Form.Form>

            <Link to="/forgot-password">{L('accounts-ui:label_forgot_password')}</Link>
            <Link to="/sign-up">{L('accounts-ui:label_sign_up')}</Link>
          </div>
        </article>
      </App.Page>
    )
  }
});