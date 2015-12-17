
const { PureRenderMixin } = React.addons;

Pagination.List = React.createClass({
  mixins: [PureRenderMixin],

  scrollPos: new ReactiveVar(0),

  getDefaultProps() {
    return {
      className: '',
      listTotal: 0,
      listLength: 0,
      pagination: null,
      loading: true,
      loadMore: 'Load more...',
    }
  },

  handleLoadMore() {
    if (this.props.pagination) {
      const object = this.props.pagination.get();

      object.limit += object.increment;

      this.props.pagination.set(object);
    }
  },

  componentDidMount() {
    Meteor.setTimeout(() => {
      $(this.refs.list).parent().scrollTop(this.scrollPos.get());
    }, 300);
  },

  componentWillUnmount() {
    const scrollTop = $(this.refs.list).parent().scrollTop();
    this.scrollPos.set(scrollTop);
  },

  render() {

    return (
      <div className={this.props.className} ref="list">
        {this.props.children}

        <Pagination.LoadMore show={this.props.listTotal > this.props.listLength}
                             loading={this.props.loading}
                             onClick={this.handleLoadMore}>
          {this.props.loadMore}
        </Pagination.LoadMore>
      </div>
    )
  }

});
