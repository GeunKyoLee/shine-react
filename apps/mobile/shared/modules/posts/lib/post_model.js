
Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert(object) {
    check(object, Match.Where(matchPostInsert));

    const now = new Date();
    const post = {
      title: object.title,
      content: object.content,
      createdAt: now,
      updatedAt: now
    };

    const postId = Posts.insert(post);

    return postId;
  },

  postUpdate(postId, object) {
    check(postId, String);
    check(object, Match.Where(matchPostUpdate));

    const post = {
      title: object.title,
      content: object.content,
      updatedAt: new Date()
    };

    return Posts.update({ _id: postId }, { $set: post });
  }
});
