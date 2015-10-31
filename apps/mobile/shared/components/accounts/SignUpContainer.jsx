
Accounts.SignUpContainer = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    alert('sign-up');
  },

  render() {
    return <Accounts.SignUp onSubmit={this.onSubmit}/>
  }
});
