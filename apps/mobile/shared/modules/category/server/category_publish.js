Meteor.publish('categoriesList', function() {

  const query = { active: true };
  const options = { sort: { seq: 1 }};

  return Category.collection.find(query, options);
});

