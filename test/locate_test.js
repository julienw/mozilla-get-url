suite('channels/release', function() {
  var get = require('../'),
      verifyGet = require('./support/get_suite')(get);

  suite('release channel', function() {
    // latest
    verifyGet({ os: 'mac' }, function() {
      assert(this.url.indexOf('latest') !== -1, 'latest');
    });

    // specific release
    verifyGet({ os: 'mac', version: '17.0' }, function() {
      assert(this.url.indexOf('17') !== -1);
    });

    // explicit release channel
    verifyGet({ os: 'mac', channel: 'release' }, function() {
      assert(this.url.indexOf('releases') !== -1, 'uses release channel');
    });
  });

  suite('pre-release channel', function() {
    verifyGet({ os: 'mac', product: 'b2g', channel: 'aurora' }, function() {
      assert(this.url.indexOf('aurora'));
    });

    verifyGet({ os: 'mac', channel: 'beta' }, function() {
      assert(this.url.indexOf('beta'));
    });
  });

  suite('tinderbox', function() {
    verifyGet({ os: 'mac', product: 'b2g', tinderbox: 'mozilla-central' });
    verifyGet({ os: 'mac', product: 'firefox', tinderbox: 'mozilla-central' });
  });
});

