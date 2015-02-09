var Grid = function(content) {
  this.cells = {};
  this.rows = {};
  this.columns = {};
  this.content = content;
};

Grid.prototype.init = function() {
  this._buildCells();
  this._buildRows();
  this._buildColumns();
};

Grid.prototype.checkRowHasValue = function(row, value) {
  var filtered = this.rows[row].filter(function(cell) {
    return cell.value === value;
  });
  return filtered.length === 1;
};

Grid.prototype.checkColumnHasValue = function(column, value) {
  var filtered = this.columns[column].filter(function(cell) {
    return cell.value === value;
  });
  return filtered.length === 1;
};

Grid.prototype._buildRows = function() {
  var _this = this;
  var row_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  this._createRows();
  row_numbers.forEach(function(number) {
    Object.keys(_this.cells).forEach(function(coord) {
      if(coord.split("").pop() === number)
        _this.rows[number].push(_this.cells[coord]); 
    });
  });
};

Grid.prototype._buildColumns = function() {
  var _this = this;
  var column_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  this._createColumns();
  column_letters.forEach(function(letter) {
    Object.keys(_this.cells).forEach(function(coord) {
      if(coord.split("").reverse().pop() === letter)
        _this.columns[letter].push(_this.cells[coord]); 
    });
  });
};

Grid.prototype._createColumns = function() {
  var _this = this;
  var column_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  column_letters.forEach(function(letter) {
    _this.columns[letter] = [];
  }); 
};

Grid.prototype._createRows = function() {
  var _this = this;
  var row_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  row_numbers.forEach(function(number) {
    _this.rows[number] = [];
  }); 
};

Grid.prototype._buildCells = function() {
  var _this = this;
  var columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  var rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  columns.forEach(function(l) { 
    rows.forEach(function(n) {
      _this.cells[l+n] = new _this.content(); 
    });
  });
};


module.exports = Grid;
