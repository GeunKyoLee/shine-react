
userDisplayName = function(user) {
  if (typeof user === 'undefined') return '';

  if (user) {
    if (user.name) return user.name;

    if (user.username) return user.username;

    if (user.emails && user.emails[0]) return user.emails[0].address;
  }

  return '';
};


userPictureURL = function(user) {
  const url = user && user.profile &&
    user.profile.picture && user.profile.picture.url;

  return url ? url : DEFAULT_PICTURE_URL;
};
