
App.ProfileEditContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  components: {
    email: <App.ProfileEditEmail onSubmit={this.handleEditEmail} />,
    password: <Accounts.ui.ChangePasswordContainer onChanged={this.handleChangePassword} />,
    name: <App.ProfileEditName onSubmit={this.handleEditName} />
  },

  handleEditEmail(email) {
    Accounts.addEmail(this.data.user._id, email);
  },

  handleChangePassword() {
    Overlay.notify('password changed successfully.');
  },

  handleEditName(name) {

  },

  render() {
    const value = this.props.params.name;

    const title = L(`label_profile_edit_${value}`);
    const component = this.components[value];

    return (
      <App.Page>
        <App.Header title={title} />

        <article className="page">
          {component}
        </article>
      </App.Page>
    )
  }
});
