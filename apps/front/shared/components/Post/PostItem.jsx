Shine.PostItem = React.createClass({

  mixins: [ReactMeteorData, Mixins.accounts, Mixins.utils],
  getInitialState() {
    return {
      canLike: !! this.props.likes,
    }
  },

  getMeteorData() {

    /* Reactive 데이터가 아닌데 MeteorData를 써야하나? */
    let canEdit = false;
    let currentUser = Meteor.user();


    if (currentUser) {
      try {
        canEdit = postAccess('update', currentUser, this.props.post._id);
      } catch (ex) {

      }
    }

    return {
      canEdit,
      currentUser
    }
  },

  onLikeInsert(e) {
    e.preventDefault();

    if (!this.data.currentUser) {
      console.log('로그인 화면으로 이동 시켜줘');
      return;
    }

    Meteor.call('postLikeInsert', this.props.post._id, (error) => {
      if (error) {
        Alerts.notify('error', error.reason);
      }

      this.setState({ canLike : false })
    });
  },

  onLikeRemove(e) {
    e.preventDefault();

    Meteor.call('postLikeRemove', this.props.post._id, (error) => {
      if (error) {
        Alerts.notify('error', error.reason);
      }

      this.setState({ canLike : true })
    });
  },



  render() {
    console.log('this.props.post: ', this.props.post);

    if (! this.props.post) {
      return (
        <Shine.PostNotFound />
      )
    }

    const { Link } = ReactRouter;

    let Editable;

    let { title, categoryId, author, createdAt } = this.props.post;
    let { likes, comments } = this.props.post.count;

    let categoryName = Categories.findOne(this.props.post.categoryId).title;

    let postId = this.props.post._id;
    let content = this.props.post.content.data;


    if (this.data.canEdit) {
      Editable = Shine.createClazz(
        <header>
          <div className="btn-toolbar pull-right">
            <Link className="btn btn-primary" to="/postEdit">Edit</Link>
            <button type="button" id="remove" className="btn btn-danger">Delete</button>
          </div>
        </header>
      );
    } else {
      Editable = Shine.createClazz(
        <header></header>
      )
    }

    let Likable;
    if (this.state.canLike) {
      Likable = Shine.createClazz(
        <button
          onClick={this.onLikeInsert}
          type="button"
          id="like"
          className="btn btn-danger">Like</button>
      )
    } else {
      Likable = Shine.createClazz(
        <button
          onClick={this.onLikeRemove}
          type="button"
          id="unlike"
          className="btn btn-default">Unlike</button>
      )
    }


    return (
      <article className="page post container-fluid shine-wrapper shine-theme-base">

        <Editable />

        <article id="articleWrap">
          <h3 className="title">
            {title}
          </h3>
          <div className="info">
            <span className="category">
              <Link to={`/category/${categoryId}`}>{categoryName}</Link></span>
		      <span className="author">
		        <i>by </i>
            <Link to="/accountView">{ this.userDisplayName(author) }</Link>
		      </span>
            <span className="date"> { this.momentFromNow(createdAt) } </span>
          </div>
          <section id="contentWrapper" className="markdown block-wrapper">
            <div> {content} </div>
          </section>
        </article>

        <div id="snswWrap">
          <div className="sns">
            <Likable />
          </div>
        </div>

          > postCommentsList  
      </article>
    )
  }
});

