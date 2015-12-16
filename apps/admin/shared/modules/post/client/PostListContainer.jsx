
const { History } = ReactRouter;

Post.ListContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const limit = this.pagination.get().limit;
    const sort = {};
    sort[this.pagination.get().sort.field] = this.pagination.get().sort.value;

    const handle = Meteor.subscribe('postsList', { limit, sort });

    const postsCount = Counts.get('postsListCount');
    const posts = Post.collection.find({}, { limit, sort }).map((post) => {
      if (post.categoryId) {
        post.category = Category.collection.findOne(post.categoryId);
      }
      return post;
    });

    return {
      loading: (! handle.ready()),
      postsCount,
      posts,
      pagination: this.pagination,
    }
  },

  pagination: new ReactiveVar({
    increment: 30,
    limit: 30,
    sort: {
      field: 'createdAt',
      value: -1
    }
  }),

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    return (
      <Post.List {...this.data} />
    )
  }
});