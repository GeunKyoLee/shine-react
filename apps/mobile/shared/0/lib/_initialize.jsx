
// Global namespaces
if (typeof(App) === 'undefined') App = {};

Meteor.startup(function () {

  // setup Internationalization
  I18n.init();
  I18n.loadLanguage("en", 'I18n_data_en');
  I18n.loadLanguage("ko", 'I18n_data_ko');
  I18n.setLanguage("ko");

  // I18n Alias for JSX
  L = (key, args, lang) => I18n.get(key, args, lang);

  // setup Accounts-ui
  /*
   if (Meteor.isClient) {
   Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
   });
   }
   */
});


