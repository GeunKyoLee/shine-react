/**
 * insert initial data to run the app
 *
 */
insertInitData = function() {

  // user accounts
  if (Meteor.users.find().count() === 0) {
    const users = [
      {
        username: 'admin',
        email: 'leesn@bookp.al',
        password: '74123',
        roles: [ 'ROLE_ADMIN' ]
      },

      {
        username: 'test',
        email: 'dev@bookp.al',
        password: '74123'
      }
    ];

    users.forEach((user) => {
      user._id = Accounts.createUser({
        username: user.username,
        email: user.email,
        password: user.password
      });

      if (user.roles && user.roles.length > 0) {
        Roles.addUsersToRoles(user._id, user.roles);
      }
    });
  }

  // categories
  if (Categories.find().count() === 0) {
    const now = new Date();
    const categories = [
      {
        _id: 'news',
        title: 'News & Information',
        seq: 1,
        state: 'ON',
        createdAt: now,
        updatedAt: now
      },
      {
        _id: 'lectures',
        title: 'Lectures',
        seq: 2,
        state: 'ON',
        createdAt: now,
        updatedAt: now
      },
      {
        _id: 'techtips',
        title: 'Tech-tips',
        seq: 3,
        state: 'ON',
        createdAt: now,
        updatedAt: now
      }
    ];

    categories.forEach((category) => { Categories.insert(category); });
  }
};
