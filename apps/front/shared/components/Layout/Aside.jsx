Shine.DefaultAsideLeft = React.createClass({
	displayName: "MainAside",

	propTypes: {

	},

	showLogin(e) {
		e.preventDefault();
		e.stopPropagation();
		Accounts.ui.dialog.show('signIn');
	},
	logout(e) {
		Meteor.logout();
	},
	render() {
		return (
			<aside className="left">
				<header>
					<button className="btn btn-link btn-xs aside-pin active"
					        data-toggle="button" aria-pressed="false" autoComplete="off">
						<i className="fa fa-thumb-tack"></i>
					</button>
				</header>
				<div className="body">
					<div id="nav-main">
						<Shine.AsideAccount
							currentUser={this.props.currentUser}
							showLogin={this.showLogin}
							logout={this.logout}/>
						<Shine.AsideMenu
							currentUser={this.props.currentUser}/>
					</div>
				</div>
			</aside>
		)
	}
});

