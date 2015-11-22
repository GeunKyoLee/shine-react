
const { Link } = ReactRouter;

Accounts.ui.InputPassword = React.createClass({
  moveToForgotPassword() {
    this.props.moveTo('forgot-password');
  },

  render() {
    return (
      <div className="form-group">
        <input type="password"
               id="password"
               className="form-control"
               name="password"
               placeholder={L('accounts-ui:text_input_password')} />

        <Form.Button className="btn btn-link right"
                     onClick={this.moveToForgotPassword} >
          {L('accounts-ui:text_forgot_password')}
        </Form.Button>
      </div>
    )
  }
});

