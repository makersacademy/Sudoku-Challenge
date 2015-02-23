var expect = require('chai').expect;
var Setup = require('./helpers/homepageHelper');

describe('Visiting the homepage', function() {

  var client = {};
  var allPassed = true;
  var username = process.env.SAUCE_USERNAME;
  var access_key = process.env.SAUCE_ACCESS_KEY;

  if (process.env.TRAVIS) {

    before(function(done) {
      client = new Setup().travis();  
      client.addTravisSauceCommand();
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

  } else {

    before(function(done) {
      client = new Setup().local();
      client.init(done);
    });

    after(function(done) {
      client.end(done);
    });

  }

  beforeEach(function(done) {
    client
      .url('http://localhost:3000')
      .call(done);
  });

  afterEach(function(done) {
    allPassed = allPassed && (this.currentTest.state === "passed");
    done();
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

