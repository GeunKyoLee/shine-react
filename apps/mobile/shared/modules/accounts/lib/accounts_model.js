
Meteor.methods({
  accountUpdate(userId, profile) {
    check(userId, String);

    const data = {
      'profile.name': profile.name,
      'profile.updatedAt': new Date(),
    };

    return Meteor.users.update({ _id: userId }, { $set: data });
  }
});
