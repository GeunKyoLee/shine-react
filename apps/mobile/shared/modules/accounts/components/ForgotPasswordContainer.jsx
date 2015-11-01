
Accounts.ForgotPasswordContainer = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    alert('forgot-password');
  },

  render() {
    return <Accounts.ForgotPassword onSubmit={this.onSubmit}/>
  }
});
