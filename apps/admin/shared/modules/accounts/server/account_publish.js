Meteor.publish('accountsList', () => {
  return Meteor.users.find({}, { sort: { createdAt: -1 }});
});
