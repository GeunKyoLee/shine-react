
const { Link } = ReactRouter;

App.Home = React.createClass({
  render() {
    return (
      <App.Page>
        <App.HomeHeader />

        <article className="page">
          <h1>Home</h1>

          <Link to="/about">About</Link>
        </article>
      </App.Page>
    )
  }
});
