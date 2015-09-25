


Shine.DefaultAside = React.createClass({
	displayName: "MainAside",

	propTypes: {
		// This component gets the task to display through a React prop.
		// We can use propTypes to indicate it is required
	},

	render() {
    return (
	    <aside className={this.props.location}>
		    <header>
					<AsidePin
            pin={this.props.pin}
            onChange={this.props.onAsidePinChange} />
		    </header>
		    <div className="body">
			    <div id="nav-main">
						<Shine.AsideAccount
							currentUser={this.props.currentUser}
							showLogin={this.showLogin}
							logout={this.logout}/>
			    </div>
		    </div>
	    </aside>
    )
  }
});
