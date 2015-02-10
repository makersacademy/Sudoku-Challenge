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
    expect(grid.checkFilterHasValue(grid.rows, 1, 7)).to.be.true;
  }); 

  it('knows if a column contains a specific number', function() {
    grid = new Grid(Object);
    grid.init();
    grid.cells.A1["value"] = 7;
    expect(grid.checkFilterHasValue(grid.columns, "A", 7)).to.be.true;
  }); 
  
  it('knows if a box contains a specific number', function() {
    grid = new Grid(Object);
    grid.init();
    grid.cells.A1["value"] = 7;
    expect(grid.checkFilterHasValue(grid.boxes, "1", 7)).to.be.true;
  }); 

  it('can be populated with a string of 81 digits', function() {
    grid = new Grid(Object); 
    grid.init();
    grid.loadPuzzle("8194.237.63.7.14895.78...12.....392632469715.....28743763....94291.....74..97...1");
    expect(grid.isReady()).to.be.true;
  });
});
