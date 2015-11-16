
Accounts.ForgotPasswordContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(email) {
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        this.setState({ errors: [error.reason] });
        return Overlay.notify(error.reason);
      }

      Overlay.notify('email for reset password sent');
    });
  },

  render() {
    return <Accounts.ForgotPassword onSubmit={this.handleSubmit}
                                    errors={this.state.errors} />
  }
});
