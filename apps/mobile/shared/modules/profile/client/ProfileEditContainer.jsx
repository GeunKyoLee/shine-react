
App.ProfileEditContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  getComponent(key) {
    switch (key) {
      case 'email':
        const emails = this.data.user && this.data.user.emails;
        return <App.ProfileEditEmail emails={emails}
                                     onSubmit={this.handleEditEmail} />
      case 'password':
        return <Accounts.ui.ChangePasswordContainer
          onChanged={this.handleChangePassword} />

      case 'name':
        const name = this.data.user &&
          this.data.user.profile && this.data.user.profile.name;
        return <App.ProfileEditName name={name}
          onSubmit={this.handleEditName} />
    }

    return null;
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
    const component = this.getComponent(value);

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
