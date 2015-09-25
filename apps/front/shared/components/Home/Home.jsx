Shine.Home = React.createClass({

  addLimit() {
    Config.limit.set(Config.limit.get() + Config.increment);
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
                  if (this.props.postReady) {
                    return this.props.postList.map((post) =>
	                    <Shine.PostList key={post._id} {...post} />)
                  } else {
                    return (<div className="spinner-wrapper">
                              <SpinnerView />
                            </div>)
                  }
                } else {
                  return this.props.postList.map((post) =>
	                  <Shine.PostList key={post._id} {...post} />)
                }
              })() }

              { (() => {
                if (Config.limit.get() > 10) {
                  if (!this.props.postReady) {
                    return (<div className="list-spinner-wrapper">
                              <SpinnerView />
                            </div>)
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
