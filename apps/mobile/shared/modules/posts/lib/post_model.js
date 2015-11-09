
Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert(post) {
    const postId = Posts.insert(post);

    return postId;
  },
});
