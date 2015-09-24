
CategoryValidator = {
  schema: {
    _id: {
      required: true,
      type: 'string',
      minLength: 3,
      maxLength: 20
    },

    title: {
      required: true,
      type: 'string',
      minLength: 1,
      maxLength: 100
    },

    seq: {
      required: false,
      type: 'number'
    },

    state: {
      required: true,
      type: 'string',
      values: ['ON', 'OFF']
    },

    permissionRead: {
      required: true,
      type: 'string',
      values: ['PUBLIC', 'PROTECTED', 'PRIVATE']
    },

    permissionWrite: {
      required: true,
      type: 'string',
      values: ['PUBLIC', 'PROTECTED', 'PRIVATE']
    }
  },

  validateInsert: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, [
      '_id', 'title', 'permissionRead', 'permissionWrite'
    ]);

    return validator;
  },

  validateUpdate: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, [
      'title', 'state', 'permissionRead', 'permissionWrite'
    ]);

    return validator;
  }
};


matchCategoryInsert = function(object) {
  var validation = CategoryValidator.validateInsert(object);
  return _.isEmpty(validation.errors());
};

matchCategoryUpdate = function(object) {
  var validation = CategoryValidator.validateUpdate(object);
  return _.isEmpty(validation.errors());
};
