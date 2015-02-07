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
      	'input[name="A1"]': '5', 'input[name="A2"]': '3', 'input[name="A3"]': '', 'input[name="A4"]': '', 'input[name="A5"]': '7', 'input[name="A6"]': '', 'input[name="A7"]': '', 'input[name="A8"]': '', 'input[name="A9"]': '',
      	'input[name="B1"]': '6', 'input[name="B2"]': '', 'input[name="B3"]': '', 'input[name="B4"]': '1', 'input[name="B5"]': '9', 'input[name="B6"]': '5', 'input[name="B7"]': '', 'input[name="B8"]': '', 'input[name="B9"]': '',
      	'input[name="C1"]': '', 'input[name="C2"]': '9', 'input[name="C3"]': '8', 'input[name="C4"]': '', 'input[name="C5"]': '', 'input[name="C6"]': '', 'input[name="C7"]': '', 'input[name="C8"]': '6', 'input[name="C9"]': '',
      	'input[name="D1"]': '8', 'input[name="D2"]': '', 'input[name="D3"]': '', 'input[name="D4"]': '', 'input[name="D5"]': '6', 'input[name="D6"]': '', 'input[name="D7"]': '', 'input[name="D8"]': '', 'input[name="D9"]': '3',
      	'input[name="E1"]': '4', 'input[name="E2"]': '', 'input[name="E3"]': '', 'input[name="E4"]': '8', 'input[name="E5"]': '', 'input[name="E6"]': '3', 'input[name="E7"]': '', 'input[name="E8"]': '', 'input[name="E9"]': '1',
      	'input[name="F1"]': '7', 'input[name="F2"]': '', 'input[name="F3"]': '', 'input[name="F4"]': '', 'input[name="F5"]': '2', 'input[name="F6"]': '', 'input[name="F7"]': '', 'input[name="F8"]': '', 'input[name="F9"]': '6',
      	'input[name="G1"]': '', 'input[name="G2"]': '6', 'input[name="G3"]': '', 'input[name="G4"]': '', 'input[name="G5"]': '', 'input[name="G6"]': '', 'input[name="G7"]': '2', 'input[name="G8"]': '8', 'input[name="G9"]': '',
      	'input[name="H1"]': '', 'input[name="H2"]': '', 'input[name="H3"]': '', 'input[name="H4"]': '4', 'input[name="H5"]': '1', 'input[name="H6"]': '9', 'input[name="H7"]': '', 'input[name="H8"]': '', 'input[name="H9"]': '5',
      	'input[name="I1"]': '', 'input[name="I2"]': '', 'input[name="I3"]': '', 'input[name="I4"]': '', 'input[name="I5"]': '8', 'input[name="I6"]': '', 'input[name="I7"]': '', 'input[name="I8"]': '7', 'input[name="I9"]': '9'
      }, true);
		});
		// casper.then(function() {
		// 	this.click('form#number-form input[type="submit"]');
		// });
		casper.wait(2000, function() {
			expect('body').to.contain.text('Solution:');
		});
		// casper.waitForSelector('#solution-table', function() {
	 //    expect('body').to.contain.text('Solution:');
		// });
	});

});
