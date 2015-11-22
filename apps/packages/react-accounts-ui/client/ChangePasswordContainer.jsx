
Accounts.ui.ChangePasswordContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(oldPassword, newPassword) {
    Accounts.changePassword(oldPassword, newPassword, (error) => {
      if (error) {
        this.setState({ errors: [error.reason] });
        return Overlay.notify(error.reason);
      }

      Overlay.notify('password changed successfully.');
    });
  },

  render() {
    return <Accounts.ui.ChangePassword onSubmit={this.handleSubmit}
                                       errors={this.state.errors} />
  }
});
