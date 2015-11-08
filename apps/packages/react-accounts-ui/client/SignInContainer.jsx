
Accounts.SignInContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(username, password) {

    console.log(`sign-up-submit: username=${username}, password=${password}`);

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        this.setState({ errors: [error] });
        Overlay.notify(error);
      } else {
        Overlay.notify('sign in success');
      }
    });
  },

  render() {
    return <Accounts.SignIn handleSubmit={this.handleSubmit}
                              errors={this.state.errors} />
  }
});
