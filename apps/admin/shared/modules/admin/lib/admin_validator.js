/**
 * validate user account
 *
 * Password can NOT be tested at the server side,
 * since it be sent with encrypted format.
 *
 */

var checkUsername = function(value) {
  var regex = /^[a-z0-9]+$/i;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

var checkPassword = function(value) {
  var regex = /^[A-Za-z0-9!@#$%^&*()_]+$/;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

var checkEmail = function(value) {
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (! regex.test(value)) {
    throw new Meteor.Error(ERROR_CODE_MATCH, 'error_invalid_type');
  }
};

Admin.Validator = {
  schema: {
    _id: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 30,
    },

    username: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 18,
      custom: checkUsername
    },

    email: {
      type: 'string',
      required: true,
      custom: checkEmail
    },

    password: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 18,
      custom: checkPassword
    },

    profile: {
      type: 'object',
      required: false,
      object: {
        name: {
          type: 'string',
          required: false,
          minLength: 1,
          maxLength: 100
        },

        isAdmin: {
          type: 'boolean',
          required: false,
        }
      }
    }
  },

  validateInsert: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['username', 'password']);

    return validator;
  },

  validateUpdate: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['email']);

    return validator;
  },

  validateUpdatePassword: function(object) {
    var validator = new Validator(this.schema);

    validator.validate(object, ['_id', 'password']);

    return validator;
  }
};

Account.Match = {
  update: (object) => {
    var validation = Account.Validator.validateUpdate(object);
    return _.isEmpty(validation.errors());
  }
};

