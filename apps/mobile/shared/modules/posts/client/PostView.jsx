
const contentView = function(content) {
  if (! content) return null;
  
  let value = "";
  switch (content.type) {
    case 'text':
      value = `<p>${content.data && content.data.replace(/\r?\n/g, '<br />')}</p>`;
      break;

    case 'html':
      value = content.data;
      break;

    case 'markdown':
      value = content.data;
      break;
  }

  return value;
};

const { Link } = ReactRouter;

App.PostView = React.createClass({
  handleEditPost() {
    Overlay.page(<App.PostEditContainer post={this.props.post} />,
      { className: 'slide-up' }).then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    const post = this.props.post;

    const title = post && post.title;
    const content = post && post.content;

    return (
      <App.Page className="footer-on">
        <App.Header title={L('label_post_view')} />

        <article className="page">
          <header>
            <h3>{title}</h3>
          </header>

          <div className="post-view"
               dangerouslySetInnerHTML={{__html: contentView(content)}} />
        </article>

        <App.Footer>
          <button className="btn btn-warning btn-lg btn-block"
                  onClick={this.handleEditPost}>{L('command_edit')}</button>
        </App.Footer>
      </App.Page>
    )
  }
});
