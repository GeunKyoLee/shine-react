
Package.describe({
  summary: 'Shine Theme Base',
  version: '0.0.1',
  name: 'shinejs:shine-theme-mobile',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.versionsFrom('1.2');
  api.use([
    'less',
    'shinejs:bootstrap-less'
  ]);

  // ---------------------------------- 2. Files to include ----------------------------------

  // client
  api.addFiles([
    // LESS
    'lib/client/less/main.less',
  ], 'client');

  api.addFiles([
    // includes
    'lib/client/less/includes/variables.less',
    //'lib/client/less/includes/mixins.less',
    //'lib/client/less/includes/breakpoints.less',
    //'lib/client/less/includes/grid.less',

    // global
    'lib/client/less/global/buttons.less',
    'lib/client/less/global/form.less',
    'lib/client/less/global/markdown.less',
    'lib/client/less/global/alerts.less',

    // layout
    'lib/client/less/layout/layout.less',
    'lib/client/less/layout/header.less',
    'lib/client/less/layout/aside.less',
    'lib/client/less/layout/content.less',
    'lib/client/less/layout/page.less',
    'lib/client/less/layout/overlay.less',

    // specific
    'lib/client/less/specific/animations.less',
    'lib/client/less/specific/list.less',
    //'lib/client/less/specific/balloon.less',
    'lib/client/less/specific/chat.less',
    'lib/client/less/specific/modules.less',
    //'lib/client/less/specific/post.less',
    'lib/client/less/specific/user-modal.less',
    'lib/client/less/specific/accounts.less',

  ],'client', { isImport: true });

});
