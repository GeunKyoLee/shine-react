
const { RouteContext } = ReactRouter;

Account.ListContainer = React.createClass({
  mixins: [ReactMeteorData, RouteContext],

  getDefaultProps() {
    return {
      pagination: new ReactiveVar({
        increment: 20,
        limit: 20,
        sort: {
          field: 'createdAt',
          value: -1
        }
      }),
    }
  },

  getMeteorData() {
    const pagination = this.props.pagination;
    const limit = pagination.get().limit;
    const sort = {};
    sort[pagination.get().sort.field] = pagination.get().sort.value;

    const handle = Meteor.subscribe('accountsList', { limit, sort });

    const accountsCount = Counts.get('accountsListCount');
    const accounts = Meteor.users.find(
      { 'profile.isAdmin': { $ne: true }}, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      accountsCount,
      accounts,
      pagination,
    }
  },

  render() {
    return (
      <Account.List {...this.data} location={this.props.location} />
    )
  }
});
