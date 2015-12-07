
const CategoryListItem = React.createClass({
  render() {
    const category = this.props.category;
    if (! category) return null;
    const createdAt = moment(category.createdAt).format('YYYY-MM-DD HH:mm');

    return (
      <tr className="category-item">
        <td>{category._id}</td>
        <td className="link"
            onClick={this.props.onEdit}>{category.title}</td>
        <td>{category.seq}</td>
        <td><Form.Switch on={category.active}
                         onClick={this.props.onActive} /></td>
        <td>{createdAt}</td>
      </tr>
    )
  }
});

Category.PagedList = React.createClass({
  scrollPos: new ReactiveVar(0),

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
  },

  categories() {
    if (this.props.categories.length === 0) {
      return (
        <tr>
          <td key={'_'}
              className="category-item"
              colSpan="5">{L('text_no_categories')}</td>
        </tr>
      );
    }

    return this.props.categories.map((category) => (
      <CategoryListItem key={category._id}
                        category={category}
                        onEdit={this.props.onEdit.bind(null, category._id)}
                        onActive={this.props.onActive.bind(null, category._id)} />
    ));
  },

  render() {
    const columns = [
      { title: L('label_id'), field: '_id' },
      { title: L('label_title'), field: 'title' },
      { title: L('label_seq'), field: 'seq' },
      { title: L('label_active'), field: 'active' },
      { title: L('label_created_at'), field: 'createdAt' },
    ];

    return (
      <div className="table-list" ref="list">
        <table className="table table-bordered table-striped">
          <thead>
          <App.TableHeadSort columns={columns}
                             sort={this.props.pagination.sort}
                             onSort={this.props.onSort} />
          </thead>
          <tbody>
            {this.categories()}
          </tbody>
        </table>
      </div>
    )
  }
});
