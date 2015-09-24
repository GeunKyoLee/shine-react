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
					    {this.props.postList.map( (post) =>
					    <Shine.PostItem key={post._id} {...post} />)}
				    </ul>
			    </div>
		    </div>
		    { this.props.postReady ?
			    <div className="row-fluid">
			      <button className="btn btn-deep-app btn-block load-more"
			              onClick={this.addLimit}>더보기</button>
		      </div>
			    :
			    <div class="list-spinner-wrapper">
			      <SpinnerView />
		      </div> }
	    </article>
    )
  }
});
