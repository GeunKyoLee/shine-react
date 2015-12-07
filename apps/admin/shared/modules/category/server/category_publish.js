Meteor.publish('categoriesList', function(query, options) {
  check(query, {
    active: Match.Optional(Boolean)
  });

  check(options, {
    limit: Number,
    sort: {
      _id: Match.Optional(Number),
      'title': Match.Optional(Number),
      'active': Match.Optional(Number),
      'seq': Match.Optional(Number),
      createdAt: Match.Optional(Number),
    }
  });

  query = query || {};

  Counts.publish(this, 'categoriesListCount', Category.collection.find(query), { noReady: true });

  return Category.collection.find(query, options);
});

