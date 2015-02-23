var expect = require('chai').expect;
var webdriverio = require('webdriverio');
var SauceLabs = require('saucelabs');

describe('Visiting the homepage', function() {

  var client = {};
  var allPassed = true;
  var username = process.env.SAUCE_USERNAME;
  var access_key = process.env.SAUCE_ACCESS_KEY;


  before(function(done) {
    client = webdriverio.remote({
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
    client.addCommand('sauceJobStatus', function(status, done) {
        var sessionID = client.requestHandler.sessionID;
        var sauceAccount = new SauceLabs({
            username: process.env.SAUCE_USERNAME,
            password: process.env.SAUCE_ACCESS_KEY
        });

        sauceAccount.updateJob(sessionID, status, done);
    });
    client.init(done);
  });

  after(function(done) {
    client
      .sauceJobStatus({
        passed: allPassed,
        public: true
      })
      .end(done);
  });

  afterEach(function(done) {
    allPassed = allPassed && (this.currentTest.state === "passed");
    done();
  });

  beforeEach(function(done) {
    client
      .url('http://localhost:3000')
      .call(done);
  });

  it('has a title', function(done) {
    client
      .getTitle(function(err, title) {
        expect(err).to.not.be.true;
        expect(title).to.eql('Sudoku Solver');
      })
      .call(done);
  });

  it('loads a puzzle into the table', function(done) {
    client
      .setValue('#sudokustring', '53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79')
      .click('#preview')
      .waitForValue('/html/body/center/table/tbody/tr[1]/td[1]/input', 1000)
      .getValue('/html/body/center/table/tbody/tr[1]/td[1]/input', function(err, value) {
        expect(value).to.eql("5");
      })
      .call(done);
  });

});

