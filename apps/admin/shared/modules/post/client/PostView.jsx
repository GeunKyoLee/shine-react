
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

Post.View = React.createClass({
  handleEditPost(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Post.EditContainer post={this.props.post} />,
      { className: 'slide-up' }).then((value) => {
        console.log('value = ' + value);
      });
  },

  render() {
    if (! this.props.post) return null;

    const post = this.props.post;
    const createdAt = moment(post.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <App.Page className="footer-on">

        <div className="btn-toolbar">
          <button className="btn btn-warning pull-right"
                  onClick={this.handleEditPost}>{L('command_edit')}</button>
        </div>

        <article className="page">
          <header>
            <div className="post-info">
              <img src={post.author.url} />
              <p className="name">{post.author.name}</p>
              <p className="time">{createdAt}</p>
            </div>

            <h3>{post.title}</h3>
          </header>

          <div className="post-view"
               dangerouslySetInnerHTML={{__html: contentView(post.content)}} />
        </article>

      </App.Page>
    )
  }
});
