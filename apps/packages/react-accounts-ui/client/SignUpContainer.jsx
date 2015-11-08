
Accounts.SignUpContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    Accounts.createUser(user, (error) => {
      if (error) {
        this.setState({ errors: [error] });
      }
      Overlay.notify('user created');
      console.log('user created');
    });
  },

  render() {
    return <Accounts.SignUp onSubmit={this.handleSubmit}
                              errors={this.state.errors} />
  }
});
