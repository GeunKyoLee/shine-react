
Mixins.accounts = {
	userDisplayName(user) {
		if (! user) return '';

		if (user.profile && user.profile.name) return user.profile.name;

		if (user.username) return user.username;

		if (user.oauths) {
			var services = [
				'facebook',
				'google',
				'meetup',
				'twitter',
				'github',
				'meteor-developer',
				'kakao',
				'naver',
			];

			for (let i = 0; i < services.length; i++) {
				if (user.oauths[services[i]]) return user.oauths[services[i]].name;
			}
		}

		if (user.emails && user.emails[0] && user.emails[0].address)
			return user.emails[0].address;

		return '';
	},

	/**
	 *
	 * @returns {string}
	 */
	getPicture(user) {

		let capitalizedFirstLetter = function(word) {
			return word.charAt(0).toUpperCase();
		};

		if (!user) return '';

		if (user) {
			if (user.profile && user.profile.picture) {
				if (user._id === Meteor.userId()) {
					var flag = myPicState(user);
					if (flag === 'onlyOrigin' || flag === 'both') {
						const url = user.profile.picture.origin.urlCropped;
						return React.DOM.img({src: url, alt: "Profile image", className: "img-circle"})
					}
				}

				const url = user.profile.picture.origin.urlCropped;
				return React.DOM.img({src: url, alt: "Profile image", className: "img-circle"})
			}

			if (user.oauths) {
				var services = [ 'facebook', 'google', 'meetup', 'twitter', 'github', 'meteor-developer', 'kakao', 'naver'];
				for (var i = 0; i < services.length; i++) {
					if (user.oauths[services[i]]) {
						if (user.oauths[services[i]].picture) {
							return "<img src='" + user.oauths[services[i]].picture + "'alt='Profile image' class='img-circle'>";
						}
						const initial = capitalizedFirstLetter(user.oauths[services[i]].name);
						return React.DOM.span({src: url, alt: "Profile image", className: "avatar-initials"}, initial)
					}
				}
			}

			if (user.profile && user.profile.avatar) {
				const url = user.profile.avatar;
				return React.DOM.img({src: url, alt: "Profile image", className: "img-circle"})
			}

			if (user.username) {
				const initial = capitalizedFirstLetter(user.username);

				return React.DOM.span({className: "avatar-initials"}, initial);
			}

			if (user.emails && user.emails[0] && user.emails[0].address) {
				const initial = capitalizedFirstLetter(user.emails[0].address);
				return React.DOM.span({className: "avatar-initials"}, initial);
			}
		}
	}
}