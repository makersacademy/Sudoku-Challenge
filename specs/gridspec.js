var chai = require('chai');
var expect = chai.expect;
var Grid = require('../public/js/grid');

describe('Grid', function() {

  var grid;

  it('can be initialised as a grid of 81 cells', function() {
    grid = new Grid(Object);
    grid.init();
    expect(Object.keys(grid.cells).length).to.equal(81);
  });

  it('knows if a row contains a specific number', function() {
    grid = new Grid(Object);
    grid.init();
    grid.cells.A1["value"] = 7;
    expect(grid.checkRowHasValue(1, 7)).to.be.true;
  }); 

  it('knows if a column contains a specific number', function() {
    grid = new Grid(Object);
    grid.init();
    grid.cells.A1["value"] = 7;
    expect(grid.checkColumnHasValue("A", 7)).to.be.true;
  }); 
  
  it('knows if a box contains a specific number', function() {
    grid = new Grid(Object);
    grid.init();
    grid.cells.A1["value"] = 7;
    expect(grid.checkBoxHasValue("1", 7)).to.be.true;
  }); 

});
