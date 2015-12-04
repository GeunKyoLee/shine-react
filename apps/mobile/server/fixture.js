
insertInitData = function() {
  if (Meteor.users.find().count() === 0) {
    const user = {
      email: 'leesn@bookp.al',
      password: '74123',
      profile: {
        name: '이상원'
      }
    };

    user._id = Accounts.createUser(user);

    for (let i = 0; i < 100; i++) {
      Post.collection.insert({
        title: `Post title #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 반갑습니다.'
        },
        author: {
          _id: user._id,
          name: user.profile.name
        },
        createdAt: new Date(),
      });
    };

    System.collection.insert({
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
