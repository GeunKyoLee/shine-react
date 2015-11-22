
const { Link } = ReactRouter;

Accounts.ui.ChangePassword = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    const oldPassword = e.target['old-password'].value;
    const newPassword = e.target['new-password'].value;
    const passwordAgain = e.target['password-again'].value;

    if (newPassword !== passwordAgain) {
      return Overlay.notify('password confirm fail');
    }

    this.props.onSubmit(oldPassword, newPassword);
  },

  componentDidMount() {
    $('form input:first').focus();
  },

  render() {
    return (
      <div className="accounts-ui-frame">
        <Form.Form id="form-change-password" onSubmit={this.handleSubmit}>
          <Form.InputText id="old-password"
                          name="old-password"
                          placeholder={L('accounts-ui:label_old_password')} />

          <Form.InputText id="new-password"
                          name="new-password"
                          placeholder={L('accounts-ui:label_new_password')} />

          <Form.InputText id="password-again"
                          name="password-again"
                          placeholder={L('accounts-ui:label_password_again')} />

          <Form.Button type="submit"
                       className="btn btn-primary btn-block">
            {L('accounts-ui:label_change_password')}
          </Form.Button>
        </Form.Form>
      </div>
    )
  }
});
