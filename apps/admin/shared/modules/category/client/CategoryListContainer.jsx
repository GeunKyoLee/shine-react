
const { History } = ReactRouter;

Category.ListContainer = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData() {
    const limit = this.pagination.get().limit;
    const sort = {};
    sort[this.pagination.get().sort.field] = this.pagination.get().sort.value;

    const handle = Meteor.subscribe('categoriesList', {}, { limit, sort });

    const categoriesCount = Counts.get('categoriesListCount');
    const categories = Category.collection.find({}, { limit, sort }).fetch();

    return {
      loading: (! handle.ready()),
      categoriesCount,
      categories,
      pagination: this.pagination,
    }
  },

  pagination: new ReactiveVar({
    increment: 30,
    limit: 30,
    sort: {
      field: 'seq',
      value: 1
    }
  }),

  handleNewCategory(e) {
    e.preventDefault();

    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    Overlay.page(<Category.NewContainer />).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleEdit(categoryId) {
    if (! Meteor.user()) {
      return Overlay.notify(L('text_sign_in_first'));
    }

    const category = Category.collection.findOne(categoryId);

    Overlay.page(
      <Category.EditContainer category={category} />
    ).then((value) => {
      console.log('value = ' + value);
    });
  },

  handleActive(categoryId) {
    Meteor.call('categoryUpdateActive', categoryId, (error) => {
      if (error) {
        return Overlay.notify(error.reason);
      }
    });
  },

  render() {
    return (
      <Category.List {...this.data} onNewCategory={this.handleNewCategory}
                                    onEdit={this.handleEdit}
                                    onActive={this.handleActive} />
    )
  }
});