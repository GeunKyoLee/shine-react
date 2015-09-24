
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

		
		// Post subscribe
		let query = { };
		
		let options =
		{
			limit: Config.limit.get()
		};

		console.log('Layout globalLimit: ', Config.limit.get());

		let postReady = _.all([Meteor.subscribe('releasedPostsList', query, { limit: Config.limit.get()})], (handle) =>
			handle.ready());

		console.log('systemReady: ', systemReady);
		console.log('categoryReady: ', categoryReady);
		console.log('postReady: ', postReady);

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


