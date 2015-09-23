
Shine.CategoryListItem = React.createClass({

  render() {
		const { Link } = ReactRouter;

    return (
	    <Link to="/categoryView">
		    <i className="fa fa-chevron-right"></i> {this.props.title}
	    </Link>
    )
  }
});
