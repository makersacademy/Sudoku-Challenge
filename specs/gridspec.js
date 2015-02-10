var chai = require('chai');
var expect = chai.expect;
var Grid = require('../public/js/grid');

describe('Grid', function() {

  var grid;
  beforeEach(function(done) {
    grid = new Grid(Object);
    grid.init();
    done();
  });

  it('can be initialised as a grid of 81 cells', function() {
    expect(Object.keys(grid.cells).length).to.equal(81);
  });

  it('knows if a row contains a specific number', function() {
    grid.cells.A1["value"] = 7;
    expect(grid.checkFilterHasValue(grid.rows, 1, 7)).to.be.true;
  }); 

  it('knows if a column contains a specific number', function() {
    grid.cells.A1["value"] = 7;
    expect(grid.checkFilterHasValue(grid.columns, "A", 7)).to.be.true;
  }); 
  
  it('knows if a box contains a specific number', function() {
    grid.cells.A1["value"] = 7;
    expect(grid.checkFilterHasValue(grid.boxes, "1", 7)).to.be.true;
  }); 

  it('can be populated with a string of 81 digits', function() {
    grid.loadPuzzle("8194.237.63.7.14895.78...12.....392632469715.....28743763....94291.....74..97...1");
    expect(grid.isReady()).to.be.true;
  });

  it('can determine the possible solutions to an empty cell', function() {
    grid.loadPuzzle("8194.237.63.7.14895.78...12.....392632469715.....28743763....94291.....74..97...1");
    expect(grid.findCellSolutions("A5")).to.eql(["5", "6"]);
  });

  it('can solve a cell with only one solution', function() {
    grid.loadPuzzle("8194.237563.7.14895.78...12.....392632469715.....28743763....94291.....74..97...1");
    grid.solveCell("A5");
    expect(grid.cells["A5"].value).to.equal("6");
  });

  it('can solve an easy puzzle', function() {
    grid.loadPuzzle("8.946237563275148.54783961217854392632469.1589561287437632158.4291384567.85976231");
    grid.solve();
    expect(grid.printSolution()).to.equal("819462375632751489547839612178543926324697158956128743763215894291384567485976231");
  });

  it('can solve an medium puzzle', function() {
    grid.loadPuzzle("8.9.6.3.5....51.8.54.839......5439...2....158...128743763...8.42....4567.859....1");
    grid.solve();
    expect(grid.printSolution()).to.equal("819462375632751489547839612178543926324697158956128743763215894291384567485976231");
  });
});
