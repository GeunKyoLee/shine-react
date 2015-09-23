// App component - represents the whole app

// Global namespaces
Shine = {};
Mixins = {};


Meteor.startup(function() {
	I18n.loadLanguage("en", 'I18n_data_en');
	I18n.loadLanguage("ko", 'I18n_data_ko');

	I18n.init();
	I18n.setLanguage("en");

	// Alias
	L = I18n.getI18n;

	Shine.createClazz= function (html) {
		return React.createClass({
			render() {
				return (html);
			}
		})
	};

});


