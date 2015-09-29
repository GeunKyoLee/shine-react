const { Link } = ReactRouter;

Shine.CategoryItem = React.createClass({
	displayName: 'CategoryItem',
  render() {
    return (
	    <Link
        activeClassName="active"
        to={`/category/${this.props._id}`}>
		    <i className="fa fa-chevron-right"></i> {this.props.title}
	    </Link>
    )
  }
});
