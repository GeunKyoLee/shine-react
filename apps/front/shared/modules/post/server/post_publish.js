Meteor.publish('postsList', function(options) {
  check(options, {
    limit: Number,
    sort: {
      createdAt: Match.Optional(Number)
    }
  });

  const query = {};

  Counts.publish(this, 'postsListCount', Post.collection.find(query), { noReady: true });

  return Post.collection.find(query, options);
});

Meteor.publish('postView', (postId) => {
  return Post.collection.find({ _id: postId });
});