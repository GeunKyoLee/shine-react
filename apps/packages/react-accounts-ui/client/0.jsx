
Accounts.ui = {
  _options: {
    requestPermissions: {},
    requestOfflineToken: {},
    forceApprovalPrompt: {}
  },

  config(options) {
    // validate options keys
    const VALID_KEYS = [
      'passwordSignupFields',
      'requestPermissions',
      'requestOfflineToken',
      'forceApprovalPrompt'
    ];

    _.each(_.keys(options), (key) => {
      if (!_.contains(VALID_KEYS, key))
        throw new Error("Accounts.ui.config: Invalid key: " + key);
    });

    // deal with `passwordSignupFields`
    if (options.passwordSignupFields) {
      if (_.contains([
          "USERNAME_AND_EMAIL",
          "USERNAME_AND_OPTIONAL_EMAIL",
          "USERNAME_ONLY",
          "EMAIL_ONLY"
        ], options.passwordSignupFields)) {
        if (Accounts.ui._options.passwordSignupFields)
          throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");
        else
          Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;
      } else {
        throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
      }
    }

    // deal with `requestPermissions`
    if (options.requestPermissions) {
      _.each(options.requestPermissions, (scope, service) => {
        if (Accounts.ui._options.requestPermissions[service]) {
          throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);
        } else if (!(scope instanceof Array)) {
          throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");
        } else {
          Accounts.ui._options.requestPermissions[service] = scope;
        }
      });
    }

    // deal with `requestOfflineToken`
    if (options.requestOfflineToken) {
      _.each(options.requestOfflineToken, (value, service) => {
        if (service !== 'google')
          throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment.");

        if (Accounts.ui._options.requestOfflineToken[service]) {
          throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);
        } else {
          Accounts.ui._options.requestOfflineToken[service] = value;
        }
      });
    }

    // deal with `forceApprovalPrompt`
    if (options.forceApprovalPrompt) {
      _.each(options.forceApprovalPrompt, (value, service) => {
        if (service !== 'google')
          throw new Error("Accounts.ui.config: `forceApprovalPrompt` only supported for Google login at the moment.");

        if (Accounts.ui._options.forceApprovalPrompt[service]) {
          throw new Error("Accounts.ui.config: Can't set `forceApprovalPrompt` more than once for " + service);
        } else {
          Accounts.ui._options.forceApprovalPrompt[service] = value;
        }
      });
    }
  },

  passwordSignupFields() {
    return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";
  },

  page(element) {
    return Overlay.page(element);
  }
};
