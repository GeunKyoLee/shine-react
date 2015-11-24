
const { History } = ReactRouter;

App.ProfileEditContainer = React.createClass({
  mixins: [History, ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  getComponent(key) {
    switch (key) {
      case 'name':
        const profileName = this.data.user.profile && this.data.user.profile.name;
        return <App.ProfileEditName profileName={profileName}
                                    onSubmit={this.handleEditName} />;
      case 'email':
        const emails = this.data.user.emails;
        return <App.ProfileEditEmail emails={emails}
                                     onSubmit={this.handleEditEmail} />;
      case 'password':
        return <Accounts.ui.ChangePasswordContainer
          onChanged={this.handleChangePassword} />;
    }

    return null;
  },

  handleEditEmail(email) {
    Meteor.call('accountAddEmail', this.data.user._id, email,
      (error) => {
        if (error) {
          Overlay.notify(error.reason);
        } else {
          RouteTransition.goBack(this.history);
        }
      });
  },

  handleChangePassword() {
    Overlay.notify('password changed successfully.');
    RouteTransition.goBack(this.history);
  },

  handleEditName(profileName) {
    const profile = {
      name: profileName
    };

    Meteor.call('accountUpdate', this.data.user._id, profile,
      (error) => {
        if (error) {
          Overlay.notify(error.reason);
        } else {
          RouteTransition.goBack(this.history);
          console.log('accountUpdate done');
//          $('#back').trigger('click');
        }
    });

    return false;
  },

  render() {
    if (! this.data.user) return <App.Spinner />;

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
