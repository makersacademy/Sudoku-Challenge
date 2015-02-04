var chai = require('chai');
var expect = chai.expect;
var Cell = require('../public/js/cell')

describe('Cell', function() {

  var cell;

  it ('is empty when created', function() {
    cell = new Cell();
    expect(cell.value).to.equal(null);
  });

});
