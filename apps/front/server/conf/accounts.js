/**
 * accounts-ui package configuration
 */
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

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
