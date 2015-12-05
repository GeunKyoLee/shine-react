
Account.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const limit = this.pagination.get().limit;
    const sort = {};
    sort[this.pagination.get().sort.field] = this.pagination.get().sort.value;

    const handle = Meteor.subscribe('accountsList', { limit, sort });

    const accountsCount = Counts.get('accountsListCount');
    const accounts = Meteor.users.find({}, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      accountsCount,
      accounts,
      pagination: this.pagination.get(),
    }
  },

  pagination: new ReactiveVar({
    increment: 30,
    limit: 30,
    sort: {
      field: 'createdAt',
      value: -1
    }
  }),

  handleLoadMore() {
    const object = this.pagination.get();

    object.limit += object.increment;
    this.pagination.set(object);
  },

  handleSort(field) {
    const object = this.pagination.get();

    if (field === object.sort.field) {
      object.sort.value *= -1;
    } else {
      object.sort = {
        field, value: -1
      }
    }

    this.pagination.set(object);
  },

  render() {
    return (
      <Account.List {...this.data} onLoadMore={this.handleLoadMore}
                                   onSort={this.handleSort} />
    )
  }
});