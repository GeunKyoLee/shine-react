/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// OAuth configuration
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: '444697832401598',
      secret: '0313282fb61da038926fb575d53e82b2'
    }
  }
);
/*
if (! ServiceConfiguration.configurations.findOne({ service: "facebook" })) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '444697832401598',
    secret: '0313282fb61da038926fb575d53e82b2'
  });
}
*/
// validate new user creation
Accounts.onCreateUser(function(options, user) {

  if (user.services.facebook) {
    console.log('onCreateUser facebook: ');

    const facebook = user.services.facebook;
    const picture = 'http://graph.facebook.com/' + facebook.id + '/picture?type=square&height=160&width=160';

    user.oauths = {
      facebook: {
        name: facebook.name,
        picture: picture
      }
    };

    user.profile = { name: facebook.name };
  } else {
    console.log('else onCreateUser facebook: ');

    const validator = Account.Validator.validateInsertServer(options);
    if (validator.hasError()) {
      console.log(validator.errors);
      throw new Meteor.Error('validation error: new user');
    }
    console.log('new user validation success');

    if (options.profile)
      user.profile = options.profile;
  }

  return user;
});
