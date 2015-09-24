
Shine.CategoryListItem = React.createClass({

  render() {
		const { Link } = ReactRouter;

    return (
	    <Link to={`/category/${this.props._id}`}>
		    <i className="fa fa-chevron-right"></i> {this.props.title}
	    </Link>
    )
  }
});
