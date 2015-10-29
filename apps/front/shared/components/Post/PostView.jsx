const { Link, History } = ReactRouter;

Shine.PostView = React.createClass({
  mixins: [ History ],
  render() {

    return (
      <article className="page post container-fluid shine-wrapper shine-theme-base">
        {this._editable()}
        <Shine.PostViewChild posts={this.props.posts}/>
        <div id="snswWrap">
          <div className="sns">
            {this._likable()}
          </div>
        </div>
        postCommentsList component here
      </article>
    )
  },

  _editable() {
    if (this.props.canEdit()) {

      return (
        <header>
          <div className="btn-toolbar pull-right">
            <Link className="btn btn-primary" to="/postEdit">Edit</Link>
            <button
              onClick={this._deletePost}
              type="button"
              className="btn btn-danger">Delete</button>
          </div>
        </header>
      )
    }

    return <header></header>
  },

  _likable() {
    if (! this.props.likes) {
      return (
        <button
          onClick={this.onLikeInsert}
          type="button"
          id="like"
          className="btn btn-danger">Like</button>
      )
    }

    return (
      <button
        onClick={this.onLikeRemove}
        type="button"
        id="unlike"
        className="btn btn-default">Unlike</button>
    )

  },

  onLikeInsert(e) {
    e.preventDefault();

    if (! this.props.currentUser) {
      return Accounts.ui.dialog.show('signIn');
    }

    Meteor.call('postLikeInsert', this.props.posts._id, (error) => {
      if (error) Alerts.notify('error', error.reason);
    });
  },

  onLikeRemove(e) {
    e.preventDefault();

    Meteor.call('postLikeRemove', this.props.posts._id, (error) => {
      if (error) Alerts.notify('error', error.reason);
    });
  },

  _deletePost(e) {
    e.preventDefault();

    Alerts.dialog('confirm', `정말 ${this.props.posts.title}을 삭제하시겠습니까?`, (confirm) => {
      if (confirm) {
        Meteor.call('/posts/delete', this.props.posts._id, function(error) {
          if (error) {
            Alerts.notify('error', error.message);
          } else {
            Alerts.notify('success', 'post_remove_success');
            history.go(-1);
          }
        });
      } else {
        // https://github.com/rackt/react-router/blob/master/docs/API.md

        // this.history.go(-1)
        // this.history.goBack()
        // this.history.goForward()
        // this.history.pushState(null, '/category/lectures')

        // Go to bar without creating a new history entry
        // /category/lectures/edit 이런식...
        // this.history.replaceState(null, 'edit')
      }
    });

  }

});

