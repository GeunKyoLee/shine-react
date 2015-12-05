Meteor.publish('accountsList', function(options) {
  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'emails.address': Match.Optional(Number),            // email address
      'profile.name': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  const query = {};

  Counts.publish(this, 'accountsListCount', Meteor.users.find(query), { noReady: true });

  return Meteor.users.find(query, options);
});

Meteor.publish('accountView', (accountId) => {
  check(accountId, String);

  return Meteor.users.find({ _id: accountId });
});
