var Grid = function(content) {
  this.cells = {};
  this.content = content;
};

Grid.prototype.init = function() {
  var _this = this;
  var rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  var columns = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    rows.forEach(function(l) { 
      columns.forEach(function(n) {
        _this.cells[l+n] = _this.content; 
      });
    });
};

module.exports = Grid;
