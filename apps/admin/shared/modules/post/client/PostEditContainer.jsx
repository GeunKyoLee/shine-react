
Post.EditContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const postId = this.props.params.id;
    const handle = Meteor.subscribe('postView', postId);

    return {
      loading: (! handle.ready()),
      categories: Category.collection.find({ active: true }, { sort: { seq: 1 }}).fetch(),
      post: Post.collection.findOne(postId),
    }
  },

  getInitialState() {
    return {
      errors: []
    }
  },

  handleSubmit(categoryId, title, content) {
    console.log(categoryId, title, content);

    const post = {
      categoryId,
      title,
      content: {
        version: '0.0.1',
        type: 'text',
        data: content
      }
    };

    const validation = Post.Validator.validateUpdate(post);
    if (validation.hasError()) {
      this.setState({ errors: validation.errors() });
      return;
    }

    const self = this;
    Meteor.call('postUpdate', this.props.post._id, post, (error) => {
      if (error) {
        Overlay.notify(error.reason);
        return self.props.reject(-1);
      }

      return self.props.fulfill(1);
    });
  },

  handleCancel() {
    this.props.reject(-1);
  },

  render() {
    return (
      <Post.Form {...this.data} errors={this.state.errors}
                                onSubmit={this.handleSubmit}
                                onCancel={this.handleCancel} />
    )
  }
});
