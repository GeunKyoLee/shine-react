Shine.Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Post subscribe
    let query = { };

    let options =
    {
      limit: Config.limit.get()
    };

    let postHandle = Meteor.subscribe('releasedPostsList', query, options);
    let postReady = postHandle.ready();

    let postAllCount;

    if (postReady) {
      postAllCount = Counts.get('releasedPostsListCount');
    }

    return {
      postHandle,
      postReady,
      postAllCount,
      postList: Posts.find().fetch(),
    }
  },

  addLimit() {
    Config.limit.set(Config.limit.get() + Config.increment);
  },

  componentWillUnmount() {
    //this.data.postHandle.stop();
  },

  render() {
    const { Link } = ReactRouter;

    return (
      <article className="page container-fluid shine-wrapper">
        <div className="row-fluid">
          <nav className="navtabs">
            <ul className="navtabs-list">
              <li className="navtabs-item">
                <Link
                  className="navtabs-anchor"
                  to="/home/newest"
                  activeClassName="active">최신순</Link>
              </li>
              <li className="navtabs-item">
                <Link
                  className="navtabs-anchor"
                  to="/home/like"
                  activeClassName="active">인기순</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row-fluid">
          <div className="block-group">
            <ul className="block-list">

              { (() => {
                if (Config.limit.get() == 10) {
                  if (this.data.postReady) {
                    return (
                      this.data.postList.map((post) =>
                      <Shine.PostList key={post._id} {...post} />)
                    )
                  } else {
                    return (
                      <Shine.Spinner />
                    )
                  }
                } else {
                  return (
                    this.data.postList.map((post) =>
	                    <Shine.PostList key={post._id} {...post} />)
                  )
                }
              })() }

              { (() => {
                if (Config.limit.get() > 10) {
                  if (!this.data.postReady) {
                    return (
                      <Shine.LoadMoreSpinner />
                    )
                  }
                }
              })()}

            </ul>
          </div>
        </div>

	      { this.props.postAllCount > Config.limit.get() ?
		      <div className="row-fluid">
			      <button className="btn btn-deep-app btn-block load-more"
			              onClick={this.addLimit}>더보기
			      </button>
		      </div>
		      :
		      ""
	      }

      </article>
    )
  }
});
