
Admin.ListContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const limit = this.pagination.get().limit;
    const sort = {};
    sort[this.pagination.get().sort.field] = this.pagination.get().sort.value;

    const handle = Meteor.subscribe('adminsList', { limit, sort });

    const adminsCount = Counts.get('adminsListCount');
    const admins = Meteor.users.find(
      { 'profile.isAdmin': true }, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      adminsCount,
      admins,
      pagination: this.pagination,
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

  render() {
    return (
      <Admin.List {...this.data} />
    )
  }
});