Meteor.publish('postsList', () => {
  return Post.collection.find({}, { sort: { createdAt: -1 }});
});

Meteor.publish('postView', (postId) => {
  return Post.collection.find({ _id: postId });
});

