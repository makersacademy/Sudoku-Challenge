describe('homepage', function() {

	before(function() {
		casper.start('http://localhost:3000/');
	});

	it('has a Sudoku Solver heading', function() {
		casper.then(function() {
			expect('body').to.contain.text('Sudoku Solver');
		});
	});

});
