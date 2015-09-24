/**
 * validate
 *    type:     String, Number, Boolean, Array, Object
 *    null
 *    min
 *    max
 *    custom
 *
 * @type {{}}
 */
Validator = function(schema) {
  let _schema = schema;
  let _errors = [];

  this.schema = (attribute => (_schema && _schema[attribute]));
  this.errors = (() => _errors);
  this.hasError = (() => (_errors && _errors.length > 0));

  // set a new error
  this.setError = function(attribute, message) {
    function _findError(attribute) {
      for (let i = 0; i < _errors.length; i++) {
        if (_errors[i].attribute === attribute) {
          return _errors[i];
        }
      }
      return null;
    }

    let error = _findError(attribute);
    if (! error) {
      _errors.push({ attribute: attribute, messages: [message] });
    } else {
      error.messages.push(message);
    }
  };

  this.validate = function(object, attributes, rule = _schema) {
    if (! _.isArray(attributes)) {
      attributes = [attributes];
    }

    for (let i = 0; i < attributes.length; i++) {
      const attribute = attributes[i];
      this.validateItem(object[attribute], attribute, rule[attribute]);
    }
  };

  this.validateItem = function(value, attribute, rule) {
    if (rule.required === false && ! value) {
      return;
    }

    if (rule.required && ! value) {
      this.setError(attribute, "error_input_required");
      return;
    }

    if (typeof value !== rule.type) {
      this.setError(attribute, "error_invalid_type");
    }

    if (rule.type === 'string') {
      if (rule.values && rule.values.length > 0) {
        if (! _.contains(rule.values, value)) {
          this.setError(attribute, "error_invalid_input");
        }
      }

      if ((rule.minLength && value.length < rule.minLength) ||
        (rule.maxLength && value.length > rule.maxLength)) {
        this.setError(attribute, "error_out_of_range");
      }
    } else if (rule.type === 'object') {
      this.validate(value, Object.keys(rule.schema), rule.schema);
    }
  };
};

