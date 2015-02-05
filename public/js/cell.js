'use strict';
  
  var Cell = function(value) {
    this.value = value || null;
  };

  Cell.prototype.isEmpty = function() {
    return this.value === null;
  };

  Cell.prototype.assignValue = function(number) {
    if (number >= 10 ) { throw new TypeError ('Cell value must be 1-9.'); }
    if (number != Math.abs(number)) { throw new TypeError ('Cell value must be positive.'); }
    this.value = number;
  };


module.exports = Cell;
