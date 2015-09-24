// App component - represents the whole app

// Global namespaces
Shine = {};
Mixins = {};

Shine.MeteorData = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		const sub = this.props.subscribe()
		const data = this.props.fetch()
		data.loading = !sub.ready()
		return data;
	},

	render() {
		return this.props.render(this.data)
	}
});


Meteor.startup(function() {

	// setup Internationalization
	I18n.init();
	I18n.loadLanguage("en", 'I18n_data_en');
	I18n.loadLanguage("ko", 'I18n_data_ko');
	I18n.setLanguage("ko");

	// I18n Alias for JSX
	L = (key, args, lang) => I18n.get(key, args, lang);


	Shine.createClazz= function (html) {
		return React.createClass({
			render() {
				return (html);
			}
		})
	};

	if (Meteor.isClient) {
		Accounts.ui.config({
			passwordSignupFields: "USERNAME_ONLY"
		});

		localStorage.setItem('left', '0');
		localStorage.setItem('aside-pin-left', '0');
	}
});

