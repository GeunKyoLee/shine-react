Meteor.publish('postsList', function(options) {
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'category.title': Match.Optional(Number),
      'title': Match.Optional(Number),
      'author.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  const query = {};

  Counts.publish(this, 'postsListCount', Post.collection.find(query), { noReady: true });

  const posts = Post.collection.find(query, options);


  const categories = Category.collection.find();

  return [posts, categories];
});

/**
 * used for Post.Edit
 */
Meteor.publish('postView', (postId) => {
  check(postId, String);

  const categories = Category.collection.find({ active: true }, { sort: { seq: 1 }});

  const posts = Post.collection.find({ _id: postId });

  return [categories, posts];
});