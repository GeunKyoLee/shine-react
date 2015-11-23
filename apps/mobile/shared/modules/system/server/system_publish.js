
Meteor.publish('system', (id) => {
  return System.find({ _id: id }, { fields: { apiSecret: 0 }});
});
