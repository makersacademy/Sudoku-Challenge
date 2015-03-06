'use strict';
  
  var Cell = function(value) {
    this.value = value || null;
  };

  Cell.prototype.isEmpty = function() {
    return this.value === null;
  };

  Cell.prototype.assignValue = function(number) {
    this.CheckForInvalidValue(number);
    this.value = number;
  };

  Cell.prototype.CheckForInvalidValue = function(number) {
    if (this._isOutsideValidRange(number)) { throw new TypeError ('Cell value must be 1-9.'); }
    if (this._isNegative(number)) { throw new TypeError ('Cell value must be positive.'); }
    if (this._isFloat(number)) { throw new TypeError ('Cell value must be an integer.'); }
  };

  Cell.prototype._isOutsideValidRange = function(number) {
    return number >= 10 || number === 0;
  };

  Cell.prototype._isNegative = function(number) {
    return number != Math.abs(number);
  };

  Cell.prototype._isFloat = function(number) {
    return number != Math.floor(number);
  };

module.exports = Cell;
