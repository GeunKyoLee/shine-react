
const { Link } = ReactRouter;

Accounts.ui.SignIn = React.createClass({
  fields() {
    return [
      {
        name: 'username-or-email',
        placeholder: L('accounts-ui:text_input_username_or_email'),
        visible() {
          return _.contains(
            ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],
            Accounts.ui.passwordSignupFields());
        }
      },
      {
        name: 'username',
        placeholder: L('accounts-ui:text_input_username'),
        visible() {
          return Accounts.ui.passwordSignupFields() === "USERNAME_ONLY";
        }
      },
      {
        name: 'email',
        placeholder: L('accounts-ui:text_input_email'),
        type: 'email',
        visible() {
          return Accounts.ui.passwordSignupFields() === "EMAIL_ONLY";
        }
      },
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

  componentDidMount() {
    $('form input:first').focus();
  },

  renderInputs() {
    return this.fields().map((item, i) => {
      return (item.visible()) ? <Accounts.ui.Input key={i} {...item} /> : null;
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

              <Accounts.ui.InputPassword />

              <Form.Button type="submit"
                           className="btn btn-primary btn-block">
                {L('accounts-ui:label_sign_in')}
              </Form.Button>
            </Form.Form>

            <Link to="/sign-up" className="btn btn-link" >
              {L('accounts-ui:label_sign_up')}
            </Link>
          </div>
        </article>
      </App.Page>
    )
  }
});
