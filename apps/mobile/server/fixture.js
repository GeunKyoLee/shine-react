
insertInitData = function() {
  if (Meteor.users.find().count() === 0) {
    const users = [
      {
        email: 'leesn@bookp.al',
        password: '74123',
      }
    ];

    users.forEach((user) => {
      Accounts.createUser(user);
    })
  }
};
