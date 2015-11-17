
const { Link } = ReactRouter;

App.About = React.createClass({
  render() {
    return (
      <App.Page>
        <App.Header title={this.props.title} />

        <article className="page">
          <h1>About</h1>

          <Link to="/home">Home</Link>
        </article>
      </App.Page>
    )
  }
});
