insertInitData = function () {
  if (Meteor.users.find().count() === 0) {
    const user = {
      email: 'admin@shinejs.io',
      password: '74123',
      profile: {
        name: '운영자'
      }
    };

    user._id = Accounts.createUser(user)


    for (let j = 0; j < 100; j++) {
      Accounts.createUser({
        email: `test-${j}@shinejs.io`,
        password: '74123',
        profile: {
          name: `회원-${j}`
        }
      });
    }


    let category = {
      title: `공지사항`,
      seq: 1,
      active: true
    };
    category._id = Category.collection.insert(category);
    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `공지사항 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 공지사항입니다. 반갑습니다.'
        },

        author: {
          _id: user._id,
          name: user.profile.name
        },
        createdAt: new Date()
      });
    }

    category = {
      title: `자유게시판`,
      seq: 2,
      active: true
    }
    category._id = Category.collection.insert(category);

    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `자유게시판 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 자유게시판 입니다. 반갑습니다.'
        },

        author: {
          _id: user._id,
          name: user.profile.name
        },
        createdAt: new Date()
      });
    }


    category = {
      title: `Q&A`,
      seq: 3,
      active: true
    };
    category._id = Category.collection.insert(category);
    for (let i = 0; i < 20; i++) {
      Post.collection.insert({
        category: {
          _id: category._id,
          title: category.title
        },
        title: `Q&A 입니다. #${i}`,
        content: {
          type: 'text',
          version: '0.0.1',
          data: '안녕하세요 Q&A 입니다. 반갑습니다.'
        },

        author: {
          _id: user._id,
          name: user.profile.name
        },
        createdAt: new Date()
      });
    }

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
