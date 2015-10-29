
Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',

	mixins: [ReactMeteorData],

	getMeteorData() {
		if (Meteor.isServer) return {};

		// Systems subscribe
		let systemReady = _.all([Meteor.subscribe('systemView')], (handle) =>
			handle.ready());

		// Category subscribe
		let categoryReady = _.all([Meteor.subscribe('releasedCategoriesList')], (handle) =>
			handle.ready());

		return {
			systemReady,
			categoryReady,
			currentUser: Meteor.user(),
			siteName: Systems.find({_id: 'siteName'}).fetch(),
			categoryList: Categories.find({state: 'ON'}, {sort: {seq: 1}}).fetch(),
		}
	},

	render() {
		console.log('layout params: ', this.props.params);

    if (! this.data.systemReady || ! this.data.categoryReady) {
      return (
        <Shine.Spinner />
      )
    }

		return (
			<div id="container">
				<Shine.DefaultHeader
					currentUser={this.data.currentUser}
					systemReady={this.data.systemReady}
					siteName={this.data.siteName}
					/>
				<Shine.DefaultBody
					children={this.props.children}
					/>
				<Shine.DefaultAsideLeft
					categoryReady={this.data.categoryReady}
					categoryList={this.data.categoryList}
					currentUser={this.data.currentUser}/>
				<Shine.DefaultFooter />
			</div>
		)
	}
});


