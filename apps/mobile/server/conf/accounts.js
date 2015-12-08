/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

// OAuth configuration
if (! ServiceConfiguration.configurations.findOne({ service: "facebook" })) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '444697832401598',
    secret: '0313282fb61da038926fb575d53e82b2'
  });
}

// validate new user creation
Accounts.onCreateUser(function(options, user) {
  console.log('begin onCreateUser');
  console.log(options);
  console.log(user);

  const validator = Account.Validator.validateInsertServer(options);
  if (validator.hasError()) {
    console.log(validator.errors);
    throw new Meteor.Error('validation error: new user');
  }
  console.log('new user validation success');

  if (options.profile)
    user.profile = options.profile;

  return user;
});
