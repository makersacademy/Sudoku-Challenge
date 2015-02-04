var homepageStepsWrapper = function () {

  // this.World = require("../support/world.js").World;

  this.Given(/^I am on the homepage$/, function (callback) {
    this.visit('http://localhost:3000/', callback);
    callback.pending();
  });

  this.When(/^I fill in the grid$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I click submit$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I should see a solution$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I click generate$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I should see an unfinished sudoku$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

}

module.exports = homepageStepsWrapper;
