
const components = {
  email: <App.ProfileEditEmail />,
  password: <Accounts.ui.ChangePasswordContainer />,
  name: <App.ProfileEditName />
};

App.ProfileEditContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },

  render() {
    const value = this.props.params.name;

    const title = L(`label_profile_edit_${value}`);
    const component = components[value];

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
