
if (typeof Admin === 'undefined') Admin = {};

Meteor.methods({
  adminUpdate(profile) {

    const data = {
      'profile.name': profile.name,
      'profile.updatedAt': new Date(),
    };

    return Meteor.users.update({ _id: this.userId }, { $set: data });
  },

  adminAddEmail(userId, email) {
    check(userId, String);

    if (this.isSimulation) return;

    return Accounts.addEmail(userId, email);
  },

  adminUpdatePassword(admin) {

    const data = {
      'password': profile.name,
    };

    return Meteor.users.update({ _id: this.userId }, { $set: data });
  },

});
