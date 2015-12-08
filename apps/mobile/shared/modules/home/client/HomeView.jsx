
Home.View = React.createClass({
  scrollPos: new ReactiveVar(0),

  handleNewPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.NewContainer />, { className: 'slide-up' })
      .then((value) => {
        console.log('value = ' + value);
      });
  },

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
      <App.Page className="footer-on">
        <Home.Header />

        <article className="page" ref="page">
          <Post.PagedList {...this.props} />
        </article>

        <App.Footer>
          <button className="btn btn-primary btn-block"
                  onClick={this.handleNewPost}>{L('label_new_post')}</button>
        </App.Footer>
      </App.Page>
    )
  }
});
