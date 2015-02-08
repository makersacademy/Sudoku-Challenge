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
			expect('p').to.contain.text('Please enter the initial numbers:');
		});
	});

	it('has a form for entering the numbers', function() {
		casper.then(function() {
			expect('#number-form').to.be.inDOM.and.to.be.visible;
		})
	});

	it('then provides a solution once the numbers have been entered', function() {
		casper.then(function() {
      this.fillSelectors('form#number-form', {
      	'input[name="A1"]': '5', 'input[name="A2"]': '3', 'input[name="A5"]': '7',
      	'input[name="B1"]': '6', 'input[name="B4"]': '1', 'input[name="B5"]': '9', 'input[name="B6"]': '5',
      	'input[name="C2"]': '9', 'input[name="C3"]': '8', 'input[name="C8"]': '6',
      	'input[name="D1"]': '8', 'input[name="D5"]': '6', 'input[name="D9"]': '3',
      	'input[name="E1"]': '4', 'input[name="E4"]': '8', 'input[name="E6"]': '3', 'input[name="E9"]': '1',
      	'input[name="F1"]': '7', 'input[name="F5"]': '2', 'input[name="F9"]': '6',
      	'input[name="G2"]': '6', 'input[name="G7"]': '2', 'input[name="G8"]': '8',
      	'input[name="H4"]': '4', 'input[name="H5"]': '1', 'input[name="H6"]': '9', 'input[name="H9"]': '5',
      	'input[name="I5"]': '8', 'input[name="I8"]': '7', 'input[name="I9"]': '9'
      }, true);
		});
		casper.waitForSelector('#solution-table', function() {
			expect('p').to.have.text('Solution:');
			expect('#solution-table').to.be.inDOM.and.to.be.visible;
		});
	});

});
