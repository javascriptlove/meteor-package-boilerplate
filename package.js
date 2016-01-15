Package.describe({
    name:    'javascriptlove:package-boilerplate',
    version: '1.0.0',
    summary: 'A boilerplate package template',
    git: "https://github.com/javascriptlove/meteor-package-boilerplate.git",
    documentation: 'README.md'
});

// dependencies for package testing
Npm.depends({
    'lodash':           '2.4.1'
});

Package.onUse(function(api) {
    //api.use('othervendor:otherlibrary@0.0.1');

    api.addFiles(['lib/server.js'], 'server');
    api.addFiles(['lib/client.js'], 'client');
});

Package.onTest(function (api) {
    //api.use('othervendor:otherlibrary@0.0.1');

    api.use(['tinytest', 'test-helpers'], ['server', 'client']);

    //api.addAssets(['images/logo.png', 'otherscripts.js'], ['server', 'client']);

    api.addFiles(['lib/client.js'], ['client']);
    api.addFiles(['lib/server.js'], ['server']);

    api.addFiles(['tests/server.js'], 'server');
    api.addFiles(['tests/client.js'], 'client');
});

