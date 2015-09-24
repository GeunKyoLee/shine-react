Shine.Navigation = React.createClass({
	displayName: "Navigation",
  render() {
	  const { Link } = ReactRouter;
    return (
	    <div>
		    <ul>
			    <li><Link to="/">Home</Link></li>
			    <li><Link to="/about">about</Link></li>
			    <li><Link to="/account">account</Link></li>
		    </ul>
	    </div>
    )
  }
});