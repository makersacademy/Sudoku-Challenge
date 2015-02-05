var chai = require('chai');
var expect = chai.expect;
var Cell = require('../public/js/cell')

describe('Cell', function() {

  var cell;

  beforeEach(function(done) {
    cell = new Cell(); 
    done();
  });

  it ('is empty when created', function() {
    expect(cell.isEmpty()).to.be.true;
  });

  it ('can be assigned a value', function() {
    cell.assignValue(8);
    expect(cell.value).to.equal(8);
  });

  it ('can only be assigned a single digit value', function() {
    expect( function() { cell.assignValue(10) } ).to.throw('Cell value must be 1-9.');
    expect(cell.isEmpty()).to.be.true;
  });

  it ('can only be assigned a positive value', function() {
    expect( function() { cell.assignValue(-9) } ).to.throw('Cell value must be positive.');
    expect(cell.isEmpty()).to.be.true;
  });

  it ('can only be assigned an integer value', function() {
    expect( function() { cell.assignValue(4.2352) } ).to.throw('Cell value must be an integer.');
    expect(cell.isEmpty()).to.be.true;
  });

  it ('can not be assigned the value zero', function() {
    expect( function() { cell.assignValue(0) } ).to.throw('Cell value must be 1-9.');
    expect(cell.isEmpty()).to.be.true;
  });

});
