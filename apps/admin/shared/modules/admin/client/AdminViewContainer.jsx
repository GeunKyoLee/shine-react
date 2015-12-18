
Admin.ViewContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const adminId = this.props.params.id;

    const handle = Meteor.subscribe('adminView', adminId);

    const admin = Meteor.users.findOne(adminId);

    return {
      loading: (! handle.ready()),
      admin,
    }
  },

  handleUpdatePassword(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(
      <Admin.EditPasswordContainer adminId={adminId} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleUpdateName() {

  },

  handleUpdateRoles() {

  },

  render() {
    return (
      <Admin.View {...this.data} onUpdatePassword={this.handleUpdatePassword}
                                 onUpdateName={this.handleUpdateName}
                                 onUpdateRoles={this.handleUpdateRoles} />
    )
  }
});
