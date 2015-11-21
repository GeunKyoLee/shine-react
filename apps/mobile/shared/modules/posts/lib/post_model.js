
Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert(post) {
    const result = check(post, Match.Where(matchPostInsert));

    console.log(result);

    post = _.extend(post, {
      createdAt: new Date()
    });

    const postId = Posts.insert(post);

    return postId;
  },
});
