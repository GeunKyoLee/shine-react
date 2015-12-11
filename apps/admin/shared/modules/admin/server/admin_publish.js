Meteor.publish('adminsList', function(options) {
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'username': Match.Optional(Number),
      'emails.address': Match.Optional(Number),
      'profile.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  const query = { 'profile.isAdmin': true };

  Counts.publish(this, 'adminsListCount',
    Meteor.users.find(query), { noReady: true });

  return Meteor.users.find(query, options);
});

Meteor.publish('adminView', (accountId) => {
  check(accountId, String);

  return Meteor.users.find({ _id: accountId, 'profile.isAdmin': true });
});

