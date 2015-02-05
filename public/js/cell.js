'use strict';
  
  var Cell = function() {
    this.value = null; 
  };

  Cell.prototype._empty = function() {
    return this.value === null;
  };

module.exports = Cell;
