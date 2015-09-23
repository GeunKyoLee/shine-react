
Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',

	mixins: [ReactMeteorData],

	getMeteorData() {

		if (Meteor.isClient) {
			const sub = [Meteor.subscribe('systemView')];
			const subsReady = _.all(sub, function (handle) {
				return handle.ready();
			});

			return {
				currentUser: Meteor.user(),
				subsReady: subsReady,
				siteName: Systems.find({_id: 'siteName'}).fetch()
			}
		}

		if (Meteor.isServer){
			return {
			};
		}

	},
	render() {
		return (
			<div id="container">
				<Shine.DefaultHeader
					currentUser={this.data.currentUser}
				  subsReady={this.data.subsReady}
				  siteName={this.data.siteName}
					/>
				<Shine.DefaultBody children={this.props.children}/>
				<Shine.DefaultAsideLeft currentUser={this.data.currentUser}/>
				<Shine.DefaultFooter />
			</div>
		)
	}
});


