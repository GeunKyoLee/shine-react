const { Link } = ReactRouter;
const { Accounts, Utils } = Mixins;

Shine.PostViewChild = React.createClass({

  render() {

    let { title, categoryId, author, createdAt } = this.props.posts;
    let { likes, comments } = this.props.posts.count;

    let categoryName = Categories.findOne(this.props.posts.categoryId).title;
    let postId = this.props.posts._id;
    let content = this.props.posts.content.data;

    return (
      <article id="articleWrap">
        <h3 className="title">
          {title}
        </h3>
        <div className="info">
            <span className="category">
              <Link to={`/category/${categoryId}`}>{categoryName}</Link></span>
		      <span className="author">
		        <i>by </i>
            <Link to="/accountView">{ Accounts.userDisplayName(author) }</Link>
		      </span>
          <span className="date"> { Utils.momentFromNow(createdAt) } </span>
        </div>
        <section id="contentWrapper" className="markdown block-wrapper">
          <div> {content} </div>
        </section>
      </article>
    )
  }
});