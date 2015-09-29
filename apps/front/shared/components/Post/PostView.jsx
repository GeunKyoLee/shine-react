Shine.PostView = React.createClass({
  
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
      const { Link } = ReactRouter;

      return (
        <header>
          <div className="btn-toolbar pull-right">
            <Link className="btn btn-primary" to="/postEdit">Edit</Link>
            <button type="button" id="remove" className="btn btn-danger">Delete</button>
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
  }

});

