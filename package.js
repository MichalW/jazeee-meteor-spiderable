Package.describe({
  name: "jazeee:spiderable-longer-timeout",
  summary: "Extended spiderable package: SSL, caching, longer timeout, no stdin issues, publish flag",
  version: "1.2.8",
  git: "https://github.com/jazeee/jazeee-meteor-spiderable"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['webapp', 'mongo@1.1.0', 'ostrio:meteor-root@1.0.0', 'sha', 'cmather:handlebars-server@0.2.0'], 'server');
  api.use(['templating'], 'client');
  api.use(['underscore', 'coffeescript'], ['client', 'server']);

  api.addFiles('lib/spiderable.coffee', ['client', 'server']);
  api.addFiles(['lib/spiderable.html', 'lib/client.coffee'], 'client');
  api.addFiles('lib/server.coffee', 'server');
  api.addFiles('lib/phantom_script.js', 'server', { isAsset: true });

  api.export('Spiderable');
});

Package.onTest(function (api) {
  api.use(['jazeee:spiderable-longer-timeout', 'tinytest']);
  api.addFiles('tests/spiderable_tests.js', 'server');
});
