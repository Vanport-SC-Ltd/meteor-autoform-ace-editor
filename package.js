Package.describe({
  name: 'terrytompkins:meteor-autoform-ace-editor',
  version: '0.0.1',
  summary: 'Custom "ace editor" input type for AutoForm',
  git: 'https://github.com/transwebt/meteor-autoform-ace-editor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('aldeed:autoform@5.0.0');
  api.addFiles([
    'meteor-autoform-ace-editor.html',
    'meteor-autoform-ace-editor.js',
    'meteor-autoform-ace-editor-input.html',
    'meteor-autoform-ace-editor-input.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('terrytompkins:meteor-autoform-ace-editor');
  api.addFiles('meteor-autoform-ace-editor-tests.js');
});
