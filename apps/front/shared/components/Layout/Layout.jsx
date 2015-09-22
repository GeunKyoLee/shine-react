
Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},
	render() {
		return (
			<div id="container">
				<Shine.DefaultHeader
					currentUser={this.data.currentUser}
					/>
				<Shine.DefaultBody children={this.props.children}/>
				<Shine.DefaultAsideLeft currentUser={this.data.currentUser}/>
				<Shine.DefaultFooter />
			</div>
		)
	}
});


