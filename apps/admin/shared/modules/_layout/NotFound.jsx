
const { Link } = ReactRouter;

App.NotFound = React.createClass({
  render() {
    return (
      <App.Page>
        <header>
          <h3>{L('label_page_not_found')}</h3>
        </header>

        <section>
          <Link to="/" className="btn btn-primary">
            {L('label_go_home')}
          </Link>
        </section>
      </App.Page>
    )
  }
});
