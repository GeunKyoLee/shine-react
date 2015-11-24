
ProfilePictures = new Mongo.Collection('profilePictures');

const prepareData = function(user, attributes) {
  return _.extend(_.pick(attributes, 'url', 'surl', 'size', 'width', 'height',
    'urlFit', 'surlFit', 'widthFit', 'heightFit',
    'ext', 'mime', 'original', 'repoId'), {
    user: {
      _id: user._id,
    },
    createdAt: new Date()
  });
};


Meteor.methods({
  profilePictureInsert(attributes) {
    const user = Meteor.user();
    const picture = prepareData(user, attributes);

    const pictureId = ProfilePictures.insert(picture);
    if (pictureId) {
      const oldPicture = user.profile && user.profile.picture;

      Meteor.users.update(this.userId, {
        $set: {
          "profile.picture": {
            _id: pictureId,
            repoId: picture.repoId,
            url: picture.url
          }
        }
      });

      Posts.update({ 'author._id': user._id }, { $set: {
        'author.url': picture.url
      }});

      if (oldPicture) {
        ProfilePictures.remove(oldPicture._id);
        CloudinaryServer.removeImages(oldPicture.repoId);
      }
    }
  }
});
