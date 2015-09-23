Shine.DefaultAsideLeft = React.createClass({
	displayName: "MainAside",

	mixins: [Mixins.aside],

	getInitialState() {
		return {
			active: ' '
		}
	},

	logout(e) {
		Meteor.logout();
	},

	onPinToggle(e) {
		this.togglePin('left');
		this.setState({
			active: 'active'
		})
	},

	render() {
		return (
			<aside className="left">
				<header>
					<button
						onClick={this.onPinToggle}
						className={`btn btn-link btn-xs aside-pin ${this.state.active}`}
						data-toggle="button"
						aria-pressed="false"
						autoComplete="off">
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
							currentUser={this.props.currentUser}
							categoryReady={this.props.categoryReady}
							categoryList={this.props.categoryList}/>
					</div>
				</div>
			</aside>
		)
	}
});

