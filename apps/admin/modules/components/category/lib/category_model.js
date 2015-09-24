/**
 * Categories
 *    _id
 *    name                String 1..100
 *    seq                 Number
 *    state               ON, OFF
 *    permissions
 *      read
 *      write
 *      admin
 *    createdAt           Date
 *    updatedAt           Date
 */
Categories = new Mongo.Collection('categories');

const permittedRoles = ['ROLE_ADMIN', 'ROLE_CATEGORY_ADMIN'];

function checkPermissions(userId, permissions) {
  const user = Meteor.users.findOne(userId);

  if (Roles.userIsInRole(userId, permittedRoles)) return true;

  if (permissions && permissions.admin) {
    return _.insersection(permittedRoles, user.roles) !== null;
  } else {
    return false;
  }
}

Meteor.methods({
  categoryInsert: function(inputData) {
    check(inputData, Match.Where(matchCategoryInsert));

    if (this.isSimulation) return;

    if (! checkPermissions(this.userId)) {
      throw new Meteor.Error(ERROR_CODE_SECURITY, 'error_access_denied');
    }

    const now = new Date();
    const lastItem = Categories.findOne({}, { sort: { seq: -1 }, limit: 1 });
    const seq = lastItem ? lastItem.seq + 1 : 1;

    const object = {
      _id: inputData._id,
      title: inputData.title,
      permission: {
        read: inputData.permissionRead,
        write: inputData.permissionWrite
      },
      seq: seq,
      state: 'OFF',
      createdAt: now,
      updatedAt: now
    };

    return Categories.insert(object);
  },

  categoryUpdate: function(categoryId, inputData) {
    check(categoryId, String);
    check(inputData, Match.Where(matchCategoryUpdate));

    if (! checkPermissions(this.userId)) {
      throw new Meteor.Error(ERROR_CODE_SECURITY, 'error_access_denied');
    }

    const object = {
      title: inputData.title,
      permission: {
        read: inputData.permissionRead,
        write: inputData.permissionWrite
      },
      state: inputData.state,
      updatedAt: new Date()
    };

    return Categories.update({ _id: categoryId }, { $set: object });
  },

  categoryMove: function(categoryId, seq) {
    check(categoryId, String);
    check(seq, Number);

    if (! checkPermissions(this.userId)) {
      throw new Meteor.Error(ERROR_CODE_SECURITY, 'error_access_denied');
    }

    return Categories.update({ _id: categoryId }, { $set: { seq: seq }});
  },

  categoryState: function(categoryId, state) {
    check(categoryId, String);
    check(state, Match.OneOf('ON', 'OFF'));

    if (! checkPermissions(this.userId)) {
      throw new Meteor.Error(ERROR_CODE_SECURITY, 'error_access_denied');
    }

    return Categories.update({ _id: categoryId }, { $set: { state: state }});
  },

  categoryRemove: function(categoryId) {
    check(categoryId, String);

    if (! checkPermissions(this.userId)) {
      throw new Meteor.Error(ERROR_CODE_SECURITY, 'error_access_denied');
    }

    Categories.remove({ _id: categoryId });
  }
});
