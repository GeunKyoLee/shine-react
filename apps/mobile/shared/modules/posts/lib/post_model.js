
Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert(post) {

    post = _.extend(post, {
      createdAt: new Date()
    });

    const postId = Posts.insert(post);

    return postId;
  },
});
