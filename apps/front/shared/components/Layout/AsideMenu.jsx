const { Link } = ReactRouter;

Shine.AsideMenu = React.createClass({
  render() {
	  let IsCurrentUser;

	  if (this.props.currentUser) {
		  IsCurrentUser = Shine.createClazz(
				<Link
					id="myworks"
          activeClassName="active"
					to="/myworks">
					<i className="fa fa-inbox"></i> {L('title_myworks')}
				</Link>
			)
	  } else {
		  IsCurrentUser = Shine.createClazz(
			  <div></div>
		  )
	  }


    return (
	    <div className="list-group">
		    <Link
					id="home"
					activeClassName="active"
					to="/home" >
			    <i className="fa fa-home"> </i> {L('title_home')}
		    </Link>
				<IsCurrentUser />
		    {this.props.categoryReady ? this.props.categoryList.map((category) =>
			    <Shine.CategoryItem
				    key={category._id}
				    _id={category._id}
				    title={category.title} />) : null}
	    </div>
    )
  }
});



