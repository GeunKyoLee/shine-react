Package.describe({
  name: 'shinejs:react-alerts',
  version: '0.0.1',
  summary: 'Display alert message boxes for Meteor-React JS',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript',
    'underscore',
    'shinejs:i18n',
    'less',
    'shinejs:bootstrap-less'
  ], 'client');

  api.addFiles('react-alerts.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('shinejs:react-alerts');
  api.addFiles('react-alerts-tests.js');
});
