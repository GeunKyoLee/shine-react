
Accounts.SignInContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // get input data
    const username = e.target.username.value;
    const password = e.target.password.value;

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        this.setState({ errors: [error] });
      } else {
        console.log('sign in success');
        alert('sign in success');
      }
    });
  },

  render() {
    return <Accounts.SignIn onSubmit={this.handleSubmit}
                              errors={this.state.errors} />
  }
});
