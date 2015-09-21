Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

//  React.render(<App />, document.getElementById("render-target"));
});
