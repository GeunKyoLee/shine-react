Meteor.publish('postsList', () => {
  return Posts.find({}, { sort: { createdAt: -1 }});
});

Meteor.publish('postView', (postId) => {
  return Posts.find({ _id: postId });
});

