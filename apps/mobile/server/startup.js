
Meteor.startup(() => {
  insertInitData();

  // cloudinary init
  const cloudinary = System.findOne({ _id: 'cloudinary' });
  if (cloudinary) {
    CloudinaryServer.init(cloudinary);
  } else {
    console.log('cloudinary initialization failure');
  }

});