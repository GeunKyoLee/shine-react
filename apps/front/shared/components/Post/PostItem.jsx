Shine.PostItem = React.createClass({

  mixins: [ReactMeteorData, Mixins.accounts, Mixins.utils],

  getMeteorData() {
    let access = false;

    let currentUser = Meteor.user();

    if (currentUser) {
      try {
        access = postAccess('update', currentUser, this.props.post._id);
      } catch (ex) {

      }
    }

    return {
      access,
      currentUser
    }
  },

  render() {
    console.log('this.props.post: ', this.props.post);

    if (! this.props.post) {
      return (
        <Shine.PostNotFound />
      )
    }

    let Editable;

    let { title, categoryId, author, createdAt } = this.props.post;
    let { likes, comments } = this.props.post.count;

    let canLike = this.props.likes;

    let categoryName;

    if (this.props.category) {
      categoryName = this.props.category.title;
    } else {
      categoryName = categoryId;
    }


    let postId = this.props.post._id;
    let content = this.props.post.content.data;


    if (this.data.access) {
      Editable = Shine.createClazz(
        <header>
          <div className="btn-toolbar pull-right">
            <a className="btn btn-primary" href="/postEdit">Edit</a>
            <button type="button" id="remove" className="btn btn-danger">Delete</button>
          </div>
        </header>
      );
    } else {
      Editable = Shine.createClazz(
        <header></header>
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
              <a href={`/category/${categoryId}`}>{categoryName}</a></span>
		      <span className="author">
		        <i>by </i>
            <a href="/accountView">{ this.userDisplayName(author) }</a>
		      </span>
            <span className="date"> { this.momentFromNow(createdAt) } </span>
          </div>
          <section id="contentWrapper" className="markdown block-wrapper">
            <div> {content} </div>
          </section>
        </article>

        <div id="snswWrap">
          <div className="sns">
              #if like  
            <button type="button" id="unlike" className="btn btn-default">Unlike</button>
              else  
            <button type="button" id="like" className="btn btn-danger">Like</button>
              /if  
          </div>
        </div>

          > postCommentsList  
      </article>
    )
  }
});

