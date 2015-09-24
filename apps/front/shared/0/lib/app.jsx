// App component - represents the whole app

// Global namespaces
Shine = {};
Mixins = {};


Meteor.startup(function () {

	// setup Internationalization
	I18n.init();
	I18n.loadLanguage("en", 'I18n_data_en');
	I18n.loadLanguage("ko", 'I18n_data_ko');
	I18n.setLanguage("ko");

	// I18n Alias for JSX
	L = (key, args, lang) => I18n.get(key, args, lang);

	Shine.createClazz = function (html) {
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
	
	if (Posts.find().count() === 0) {
		const now = new Date();
		const posts = [
			{
				"categoryId": "qna",
				"title": "#1. React 따라하기",
				"content": {
					"version": "0.0.1",
					"type": "markdown",
					"data": "반갑습니다."
				},
				"count": {
					"hits": 0,
					"likes": 0,
					"comments": 0
				},
				"author": {
					"username": "DavidSunny",
					"name": null
				},
				"state": "PUBLISHED",
				"createdAt": now,
				"updatedAt": now
			},

			{
				"categoryId": "qna",
				"title": "#2. React 컴포넌트",
				"content": {
					"version": "0.0.1",
					"type": "markdown",
					"data": "반갑습니다."
				},
				"count": {
					"hits": 0,
					"likes": 0,
					"comments": 0
				},
				"author": {
					"username": "DavidSunny",
					"name": null
				},
				"state": "PUBLISHED",
				"createdAt": now,
				"updatedAt": now
			},
			{
				"categoryId": "qna",
				"title": "#3. React 따라하기",
				"content": {
					"version": "0.0.1",
					"type": "markdown",
					"data": "반갑습니다."
				},
				"count": {
					"hits": 0,
					"likes": 0,
					"comments": 0
				},
				"author": {
					"username": "DavidSunny",
					"name": null
				},
				"state": "PUBLISHED",
				"createdAt": now,
				"updatedAt": now
			}
		]

		posts.forEach(function (post) {
			Posts.insert(post);
		});
	}


	if (Categories.find().count() === 0) {
		const now = new Date();
		const categories = [
			{
				_id: 'news',
				title: 'News & Information',
				seq: 1,
				state: 'ON',
				createdAt: now,
				updatedAt: now
			},
			{
				_id: 'lectures',
				title: 'Lectures',
				seq: 2,
				state: 'ON',
				createdAt: now,
				updatedAt: now
			},
			{
				_id: 'techtips',
				title: 'Tech-tips',
				seq: 3,
				state: 'ON',
				createdAt: now,
				updatedAt: now
			}
		];

		categories.forEach(function (category) {
			Categories.insert(category);
		});
	}


});


