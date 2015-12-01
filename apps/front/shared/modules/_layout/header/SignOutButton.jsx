const { History } = ReactRouter;

SignOutButton = React.createClass({
  mixins: [History],

  handleSignOut() {
    Meteor.logout();
    this.history.pushState(null, '/');
  },

  render() {
    return (
      <button className="btn btn-default btn-header"
              data-toggle="tooltip"
              data-placement="bottom"
              title={L('command_sign_out')}
              onClick={this.handleSignOut} >
        <i className="fa fa-sign-out fa-2x fa-fw"></i>
      </button>
    )
  }
});
