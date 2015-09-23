Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

	localStorage.setItem('left', '0');
	localStorage.setItem('aside-pin-left', '0');

//  React.render(<App />, document.getElementById("render-target"));
});
