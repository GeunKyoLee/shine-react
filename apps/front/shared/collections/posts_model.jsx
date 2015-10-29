/**
 * Posts
 *    _id
 *    categoryId          String
 *    title               String 1..100
 *
 *    content
 *      version           "1.0"
 *      texts             Array of String
 *      images            { _id, url, surl }
 *      videos            { _id, url, surl }
 *    draft
 *      title             String 1..100
 *      content
 *        version         "1.0"
 *        texts           Array of String
 *        images          { _id, url, surl }
 *        videos          { _id, url, surl }
 *      savedAt           Date
 *
 *    tags                Array of String
 *    count               { hits, likes, comments }
 *    author              { _id, username, name }
 *    state               { READY, PUBLISHED, UNPUBLISHED }
 *    createdAt           Date
 *    updatedAt           Date
 *    publishedAt         Date
 *
 */
Posts = new Mongo.Collection('posts');

/**
 * PostLogs
 *    _id
 *    action              { CREATED, UPDATED, DELETED }
 *    details             String 1..200
 *    user                { _id, username, name }
 *    createdAt           Date
 *
 */

/**
 *
 * PostLogs Collections
 *
 */
//PostLogs = new Mongo.Collection('postLogs');

Meteor.methods({
	postInsert: function(object) {
		check(object, Match.Where(matchPostInsert));

		var user = Meteor.user();

		// check permission
		// postAccess('insert', user, object.categoryId);

		// build insert object
		var author = {
			_id: user._id,
			username: user.username,
			name: user.name
		};
		var now = new Date();

		// insert and return
		try {
			var post = {
				categoryId: object.categoryId,
				title: object.title,
				content: object.content,
				count: {
					hits: 0,
					likes: 0,
					comments: 0
				},
				author: author,
				state: 'PUBLISHED', //'READY',
				createdAt: now,
				updatedAt: now
			};

			post._id = Posts.insert(post);

			var log = {
				postId: post._id,
				action: 'CREATED',
				details: post,
				author: author,
				createdAt: now
			};

			PostLogs.insert(log);

			return post._id;
		} catch (ex) {
			return null;
		}

	},

	postUpdate: function(postId, object) {
		check(postId, String);
		check(object, Match.Where(matchPostUpdate));

		// check permission
		postAccess('update', Meteor.user(), postId);

		// set data
		var now = new Date();
		var data = {
			title: object.title,
			content: object.content,
			updatedAt: now
		};

		// insert into the database
		return Posts.update({ _id: postId }, { $set: data, $unset: { draft: "" }});
	},

	postSaveDraft: function(postId, object) {
		check(postId, String);
		check(object, Match.Where(matchPostUpdate));

		// check permission
		postAccess('update', Meteor.user(), postId);

		var data = {
			draft: {
				title: object.title,
				content: object.content,
				savedAt: new Date()
			}
		};

		return Posts.update({ _id: postId }, { $set: data });
	},

	postPublish: function(postId, object) {
		check(postId, String);
		check(object, Match.Where(matchPostPublish));

		// check permission
		postAccess('update', Meteor.user(), postId);

		var post = Posts.findOne({ _id: postId });
		if ( post.author._id !== this.userId ) {
			throw new Meteor.Error(403, "error_access_denied");
		}

		// set data
		var now = new Date();
		var data = {
			state: object.state,
			updatedAt: now
		};

		// update the database
		return Posts.update({ _id: postId }, { $set: data });
	},

  '/posts/delete': function (postId) {
    check(postId, String);

    // check permission
    // todo : Resolve role undefined error
    //Mixins.Accounts.postAccess('remove', Meteor.user(), postId);

    var post = Posts.findOne({ _id: postId });
    if ( post.author._id !== this.userId ) {
      throw new Meteor.Error(403, "error_access_denied");
    }

    // remove the post
    return Posts.remove({ _id: postId });
  }

});
