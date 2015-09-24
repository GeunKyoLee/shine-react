/**
*
* releasedPostsList, releasePostsListCount
*    categoryId
*    state: 'PUBLISHED'
*
*
*/

Meteor.publish('releasedPostsList', function(query, options) {
	let limit = options.limit;
	console.log('releasedPostsList publish');

	Meteor._sleepForMs(1000);

	Counts.publish(this, 'releasedPostsListCount', Posts.find(query),
		{ noReady: true });

	return Posts.find(query, { limit });
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

	//return Posts.find(query, options);
});
