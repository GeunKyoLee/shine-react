const { Link } = ReactRouter;

HomeButton = React.createClass({

  render() {
    return (
      <Link to="/home" className="btn btn-default btn-header">
        <i className="fa fa-home fa-2x fa-fw"></i>
      </Link>
    )
  }
});
