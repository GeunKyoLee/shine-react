
Accounts.ui.SignInContainer = React.createClass({
  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(user, password) {
    const errors = [];
    if (_.isEmpty(user)) errors.push('error_user_required');
    if (_.isEmpty(password)) errors.push('error_password_required');
    this.setState({ errors });
    if (errors.length > 0) return;

    Meteor.loginWithPassword(user, password, (error) => {
      if (error) {
        this.setState({ errors: [error] });
      } else {
        console.log('sign-in success');
        this.props.fulfill(1);
      }
    });
  },

  render() {
    return <Accounts.ui.SignIn errors={this.state.errors}
                               handleSubmit={this.handleSubmit}
                               moveTo={this.props.moveTo} />
  }
});
