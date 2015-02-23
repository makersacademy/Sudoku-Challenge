var webdriverio = require('webdriverio');
var SauceLabs = require('saucelabs');
var username = process.env.SAUCE_USERNAME;
var access_key = process.env.SAUCE_ACCESS_KEY;

var Setup = function() {};

Setup.prototype.travis = function() {
  return webdriverio.remote({
    host: 'ondemand.saucelabs.com',
    port: 80,
    user: username,
    key: access_key,
    logLevel: 'silent',
    desiredCapabilities: {
      browserName: 'chrome',
      version: '27',
      platform: 'XP',
      tags: ['Sudoku'],
      name: 'This is a test on sauce labs',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
    }
  });
};

Setup.prototype.addTravisSauceCommand = function() {
  return addCommand('sauceJobStatus', function(status, done) {
    var sessionID = client.requestHandler.sessionID;
    var sauceAccount = new SauceLabs({
        username: process.env.SAUCE_USERNAME,
        password: process.env.SAUCE_ACCESS_KEY
    });
    sauceAccount.updateJob(sessionID, status, done);
  })();
};

Setup.prototype.local = function() {
  return webdriverio.remote({ desiredCapabilities: { browserName: 'chrome' }});
};

module.exports = Setup;
