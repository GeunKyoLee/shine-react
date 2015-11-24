
Meteor.methods({
  accountUpdate(profile) {

    const data = {
      'profile.name': profile.name,
      'profile.updatedAt': new Date(),
    };

    const result = Meteor.users.update({ _id: this.userId }, { $set: data });

    if (result > 0) {
      Posts.update(
        { 'author._id': this.userId },
        { $set: { 'author.name': profile.name}},
        { multi: true }
      );
    }
  },

  accountAddEmail(userId, email) {
    check(userId, String);

    if (this.isSimulation) return;

    return Accounts.addEmail(userId, email);
  }
});
