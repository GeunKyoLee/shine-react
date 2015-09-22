
Package.describe({
  summary: 'Shine Theme Base',
  version: '0.1.0',
  name: 'shinejs:shine-theme-light-admin',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.versionsFrom('1.2');
  api.use([
    'less@2.5.0_1',
  ]);

  // ---------------------------------- 2. Files to include ----------------------------------

  // client
  api.addFiles([
    // LESS
    'lib/client/less/main.less',
  ], 'client');

  api.addFiles([
    // includes
    'lib/client/less/includes/colors.less',

  ],'client', { isImport: true });

});
