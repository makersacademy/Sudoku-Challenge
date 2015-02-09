var chai = require('chai');
var expect = chai.expect;
var Grid = require('../public/js/grid');

describe('Grid', function() {

  var grid;

  it('should be initialised as a grid of 81 spaces', function() {
    grid = new Grid();
    grid.init();
    expect(Object.keys(grid.cells).length).to.equal(81);
  });
  
});
