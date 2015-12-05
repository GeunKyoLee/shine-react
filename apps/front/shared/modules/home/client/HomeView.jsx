
Home.View = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    if (this.scrollPos.get() > 0) {
      Meteor.setTimeout(() => {
        $(this.refs.page).scrollTop(this.scrollPos.get());
      }, 300);
    }
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.page).scrollTop();
    this.scrollPos.set(scrollTop);
    console.log('scrollPos: ' + this.scrollPos.get());
  },

  render() {
    if (this.props.onLoading) return <App.Spinner />;

    return (
      <App.Page>

        <article className="page" ref="page">
          <header>
            <h3>{L('label_post')} <small>{L('label_list')}</small></h3>

            <div className="actions">
              <button className="btn btn-primary pull-right"
                      onClick={this.props.onNewPost}>
                {L('label_new_post')}
              </button>
            </div>
          </header>

          <Post.PagedList {...this.props} />
        </article>

      </App.Page>
    )
  }
});
