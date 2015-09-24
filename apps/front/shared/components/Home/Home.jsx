Shine.Home = React.createClass({
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
			    포스트가 없습니다.
		    </div>
		    <div className="row-fluid">
			    <div className="block-group">
				    <ul className="block-list">
					    리스트 나오는 곳
				    </ul>
			    </div>
		    </div>

		    <div className="row-fluid">
			    <a className="btn btn-deep-app btn-block load-more">더보기</a>
		    </div>
	    </article>
    )
  }
});
