
Package.describe({
  summary: 'Shine Theme Base',
  version: '0.0.1',
  name: 'shinejs:shine-theme-mobile',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'less',
    'shinejs:bootstrap-less'
  ]);

  api.addFiles([
    'lib/client/style.less',
  ], 'client');

  api.addFiles([
    // includes
    'lib/client/import/includes/variables.less',

    // global
    'lib/client/import/global/form.less',
    'lib/client/import/global/markdown.less',

    // layout
    'lib/client/import/layout/layout.less',
    'lib/client/import/layout/header.less',
    'lib/client/import/layout/aside.less',
    'lib/client/import/layout/content.less',
    'lib/client/import/layout/page.less',
    'lib/client/import/layout/overlay.less',

    // components
    'lib/client/import/specific/animations.less',
    'lib/client/import/specific/list.less',
    'lib/client/import/specific/post.less',
    'lib/client/import/specific/accounts.less',
    'lib/client/import/specific/connection.less',
    'lib/client/import/specific/spinner.less',

  ],'client', { isImport: true });

});
