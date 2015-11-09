
const { Link } = ReactRouter;

App.About = React.createClass({
  render() {
    return (
      <App.Page>
        <App.Header title={this.props.title} />

        <main className="content">
          <h1>About</h1>

          <Link to="/home">Home</Link>
        </main>
      </App.Page>
    )
  }
});
