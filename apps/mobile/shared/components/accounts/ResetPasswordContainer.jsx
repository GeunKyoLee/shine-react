
Accounts.ResetPasswordContainer = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    alert('reset-password');
  },

  render() {
    return <Accounts.ResetPassword onSubmit={this.onSubmit}/>
  }
});
