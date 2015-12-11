
const { History } = ReactRouter;

Admin.EditContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const adminId = this.props.params.id;

    const handle = Meteor.subscribe('adminView', adminId);

    const admin = Meteor.users.findOne(adminId);

    return {
      loading: (! handle.ready()),
      admin,
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  goBack() {
    if (RouteTransition.canGoBack()) {
      RouteTransition.goBack(this.history);
    } else {
      this.history.pushState(null, '/admins');
    }
  },

  handleSubmit(password, name) {
    const admin = {
      password,
      name,
    };

    const validation = Admin.Validator.validateUpdate(admin);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    Meteor.call('adminUpdate', this.data.admin._id, admin, (error) => {
      if (error) {
        return Overlay.notify(error.reason);
      }

      this.goBack();
    });
  },

  handleCancel() {
    this.goBack();
  },

  render() {
    return (
      <Admin.Form {...this.data}
                    errors={this.state.errors}
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleCancel} />
    )
  }
});
