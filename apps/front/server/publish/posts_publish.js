/**
*
* releasedPostsList, releasePostsListCount
*    categoryId
*    state: 'PUBLISHED'
*
*
*/

Meteor.publish('releasedPostsList', function(query, options) {
	return Posts.find();
	//check(query, Match.ObjectIncluding({
	//	"categoryId": Match.Optional(String)
	//}));

	//check(options, Match.ObjectIncluding({
	//	"limit": Number,
	//	"sort": Match.ObjectIncluding({
	//		"createdAt": Match.Optional(Number),
	//		"publishedAt": Match.Optional(Number)
	//	})
	//}));

	//query = _.extend(query, { state: 'PUBLISHED' });

	//Counts.publish(this, 'releasedPostsListCount', Posts.find(query),
	//	{ noReady: true });

	//return Posts.find(query, options);
});
