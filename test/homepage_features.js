describe('homepage', function() {

	before(function() {
		casper.start('http://localhost:3000/');
	});

	it('has a Sudoku Solver heading', function() {
		casper.then(function() {
			expect('h1').to.contain.text('Sudoku Solver');
		});
	});

	it('has an instruction message', function() {
		casper.then(function() {
			expect('h2').to.contain.text('Please enter the initial numbers:');
		});
	});

	it('has a form for entering the numbers', function() {
		casper.then(function() {
			expect('#enter-numbers').to.be.inDOM;
		})
	});

});
