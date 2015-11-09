Meteor.publish('postsList', () => {
  return Posts.find();
});

Meteor.publish('postView', (postId) => {
  return Posts.find({ _id: postId });
});

