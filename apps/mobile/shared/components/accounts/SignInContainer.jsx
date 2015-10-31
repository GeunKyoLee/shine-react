
Accounts.SignInContainer = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    alert('sign-in');
  },

  render() {
    return <Accounts.SignIn onSubmit={this.onSubmit}/>
  }
});
