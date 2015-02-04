module.exports = function() {
  var zombie = require('zombie');
  this.World = function World(callback) {
    this.browser = new zombie();

    this.visit = function(url, callback) {
      this.browser.visit(url, callback);
    };

    callback();
  };
}
