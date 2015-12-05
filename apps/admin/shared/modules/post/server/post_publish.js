Meteor.publish('postsList', function(options) {
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'title': Match.Optional(Number),
      'author.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  const query = {};

  Counts.publish(this, 'postsListCount', Post.collection.find(query), { noReady: true });

  return Post.collection.find(query, options);
});

Meteor.publish('postView', (postId) => {
  return Post.collection.find({ _id: postId });
});