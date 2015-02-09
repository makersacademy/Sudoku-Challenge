var Grid = function(content) {
  this.cells = {};
  this.rows = {};
  this.columns = {};
  this.boxes = {};
  this.content = content;
  this.box_indexes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  this.row_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  this.column_letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  this.cell_box_indexes = "111222333111222333111222333444555666444555666444555666777888999777888999777888999";
};

Grid.prototype.init = function() {
  this._buildCells();
  this._buildRows();
  this._buildColumns();
  this._buildBoxes();
};

Grid.prototype.checkBoxHasValue = function(box_number, value) {
  var filtered = this.boxes[box_number].filter(function(cell) {
    return cell.value === value;
  });
  return filtered.length === 1;
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

Grid.prototype._buildBoxes = function() {
  var _this = this;
  this._createBoxes();
  _this.box_indexes.forEach(function(number) {
    Object.keys(_this.cells).forEach(function(coord) {
      if(_this.cells[coord].box_zone === number)
        _this.boxes[number].push(_this.cells[coord]); 
    });
  });
};

Grid.prototype._buildRows = function() {
  var _this = this;
  this._createRows();
  _this.row_numbers.forEach(function(number) {
    Object.keys(_this.cells).forEach(function(coord) {
      if(coord.split("").pop() === number)
        _this.rows[number].push(_this.cells[coord]); 
    });
  });
};

Grid.prototype._buildColumns = function() {
  var _this = this;
  this._createColumns();
  _this.column_letters.forEach(function(letter) {
    Object.keys(_this.cells).forEach(function(coord) {
      if(coord.split("").reverse().pop() === letter)
        _this.columns[letter].push(_this.cells[coord]); 
    });
  });
};

Grid.prototype._createBoxes = function() {
  var _this = this;
  _this.box_indexes.forEach(function(index) {
    _this.boxes[index] = [];
  }); 
};

Grid.prototype._createColumns = function() {
  var _this = this;
  _this.column_letters.forEach(function(letter) {
    _this.columns[letter] = [];
  }); 
};

Grid.prototype._createRows = function() {
  var _this = this;
  _this.row_numbers.forEach(function(number) {
    _this.rows[number] = [];
  }); 
};

Grid.prototype._buildCells = function() {
  var _this = this;
  var i = 0;
  _this.column_letters.forEach(function(l) { 
    _this.row_numbers.forEach(function(n) {
      _this.cells[l+n] = new _this.content(); 
      _this.cells[l+n].box_zone = _this.cell_box_indexes.split("")[i];
      i++;
    });
  });
};


module.exports = Grid;
