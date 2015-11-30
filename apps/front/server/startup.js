
Meteor.startup(() => {
  insertInitData();

  // cloudinary init
  const cloudinary = System.collection.findOne({_id: 'cloudinary'});
  if (cloudinary) {
    CloudinaryServer.init(cloudinary);
  } else {
    console.log('cloudinary initialization failure');
  }
});
