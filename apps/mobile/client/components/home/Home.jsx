
const { Link } = ReactRouter;

App.Home = React.createClass({
  render() {
    return (
      <App.Page {...this.props}>
        <App.HomeHeader />

        <main className="content">
          <h1>Home</h1>

          <Link to="/about">About</Link>
        </main>
      </App.Page>
    )
  }
});
