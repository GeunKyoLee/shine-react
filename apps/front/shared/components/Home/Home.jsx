Shine.Home = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      loadMoreReady: true,
    }
  },

  getMeteorData() {
    // Post subscribe
    if (Config.limit.get() > Config.increment) {
      let query = {};

      let options = {
        limit: Config.limit.get()
      };

      let loadMoreHandle = Meteor.subscribe('releasedPostsList', query, options);

      //this.setState({ loadMoreReady: loadMoreHandle.ready() });

      return {
        loadMoreHandle,
      }
    }

    return {}

  },

  componentWillReceiveProps(nextProps) {
    this.setState({ loadMoreReady: this.data.loadMoreHandle.ready()});
  },

  addLimit() {
    this.setState({ loadMoreReady: false });
    Config.limit.set(Config.limit.get() + Config.increment);

  },

  render() {
    let LoadMoreLoading;


    if (this.state.loadMoreReady) {
      if (this.props.postAllCount > Config.limit.get()) {
        LoadMoreLoading = Shine.createClazz(
          <div className="row-fluid">
            <button className="btn btn-deep-app btn-block load-more"
                    onClick={ this.addLimit }>더보기
            </button>
          </div>
        )
      } else {
        LoadMoreLoading = Shine.createClazz(
          <span></span>
        )
      }
    } else {
      LoadMoreLoading = Shine.LoadMoreSpinner;
    }

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
              {
                this.props.post.map((post) =>
                  <Shine.PostList key={post._id} {...post} />)
              }
            </ul>
          </div>
        </div>

        <LoadMoreLoading />
      </article>
    )
  }
});
