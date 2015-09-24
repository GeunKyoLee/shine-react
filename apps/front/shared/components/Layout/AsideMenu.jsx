
Shine.AsideMenu = React.createClass({
  render() {
	  const { Link } = ReactRouter;
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
			    <Shine.CategoryListItem key={category._id} title={category.title} />) : ''}


	    </div>
    )
  }
});



