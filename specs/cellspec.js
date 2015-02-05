var chai = require('chai');
var expect = chai.expect;
var Cell = require('../public/js/cell')

describe('Cell', function() {

  var cell;

  it ('is empty when created', function() {
    cell = new Cell();
    expect(cell._empty()).to.be.true;
  });

  it ('can be assigned a value', function() {
    cell = new Cell();
    cell.value = 8;
    expect(cell.value).to.equal(8);
  });

});
