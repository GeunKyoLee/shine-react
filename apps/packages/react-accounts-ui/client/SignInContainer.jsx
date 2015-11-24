
const { History } = ReactRouter;

Accounts.ui.SignInContainer = React.createClass({
  mixins: [History],

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

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.history.replaceState(null, location.state.nextPathname)
        } else {
          this.history.replaceState(null, '/')
        }
        console.log('history state replace');
      }
    });
  },

  render() {
    return <Accounts.ui.SignIn errors={this.state.errors}
                               handleSubmit={this.handleSubmit} />
  }
});
