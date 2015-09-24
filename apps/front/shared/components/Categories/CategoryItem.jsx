
Shine.CategoryItem = React.createClass({
	displayName: 'CategoryItem',
  render() {
		const { Link } = ReactRouter;

    return (
	    <Link to={`/category/${this.props._id}`}>
		    <i className="fa fa-chevron-right"></i> {this.props.title}
	    </Link>
    )
  }
});
