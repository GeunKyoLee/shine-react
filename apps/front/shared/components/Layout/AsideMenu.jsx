
Shine.AsideMenu = React.createClass({
  render() {
	  const { Link } = ReactRouter;
	  let IsCurrentUser;
	  if (this.props.currentUser) {
		  IsCurrentUser = Shine.createClazz(
				<Link id="myworks"
				   to="/myworks">
					<i className="fa fa-inbox"></i> My Works
				</Link>
			)
	  } else {
		  IsCurrentUser = Shine.createClazz(
			  <div></div>
		  )
	  }
    return (
	    <div className="list-group">
		    <Link id="home"
		       to="/home" >
			    <i className="fa fa-home"> </i> Home
		    </Link>
				<IsCurrentUser />
	    </div>
    )
  }
});

