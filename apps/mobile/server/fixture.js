
insertInitData = function() {
  if (Meteor.users.find().count() === 0) {
    const users = [
      {
        email: 'leesn@bookp.al',
        password: '74123',
        profile: {
          name: '이상원'
        }
      }
    ];

    users.forEach((user) => {
      Accounts.createUser(user);
    });

    System.insert({
      _id: 'cloudinary',

      cloudName: 'meteor-shine',
      apiKey: '993774671589961',
      presets: {
        accounts: 'ps_accounts',
        posts: 'ps_posts'
      },

      private: {
        apiSecret: '0000'
      }
    });
  }
};
