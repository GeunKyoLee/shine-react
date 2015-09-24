/**
 * Server startup
 */
Meteor.startup(function() {

  process.env.HTTP_FORWARDED_COUNT = 1;

  // clear current connection information at server restart
  Connection.collection.remove({});

  // setup
  /*
  var cloudinary = Systems.findOne({ _id: 'cloudinary' });
  if (cloudinary) {
    CloudinaryServer.init(cloudinary);
  }
  */

  // fixture
  insertInitData();
});
