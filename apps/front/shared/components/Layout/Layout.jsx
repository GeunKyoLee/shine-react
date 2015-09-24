Shine.DefaultLayout = React.createClass({
	displayName: 'MainLayout',

	mixins: [ReactMeteorData],

	getMeteorData() {
		if (Meteor.isServer) return {};

		// Systems subscribe
		const systemReady = _.all([Meteor.subscribe('systemView')], (handle) =>
			handle.ready());

		// Category subscribe
		const categoryReady = _.all([Meteor.subscribe('releasedCategoriesList')], (handle) =>
			handle.ready());

		var limit = 10;

		const postReady = _.all([Meteor.subscribe('releasedPostsList')], (handle) =>
			handle.ready());

		return {
			systemReady,
			categoryReady,
			postReady,
			currentUser: Meteor.user(),
			siteName: Systems.find({_id: 'siteName'}).fetch(),
			categoryList: Categories.find({state: 'ON'}, {sort: {seq: 1}}).fetch(),
			postList: Posts.find().fetch(),
		}
	},

	render() {
		console.log('layout params: ', this.props.params);

		return (
			<div id="container">
				<Shine.DefaultHeader
					currentUser={this.data.currentUser}
					systemReady={this.data.systemReady}
					siteName={this.data.siteName}
					/>
				<Shine.DefaultBody
					children={this.props.children}
					postReady={this.data.postReady}
				  postList={this.data.postList}
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


