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
			expect('#number-form').to.be.inDOM;
		})
	});

	it('then provides a solution once the numbers have been entered', function() {
		casper.then(function() {
      this.fill('form[action="/solution"]', {
      	A1: '5', A2: '3', A5: '7',
      	B1: '6', B4: '1', B5: '9', B6: '5',
      	C2: '9', C3: '8', C8: '6',
      	D1: '8', D5: '6', D9: '3',
      	E1: '4', E4: '8', E6: '3', E9: '6',
      	F1: '7', F5: '2', F9: '6',
      	G2: '6', G7: '2', G8: '8',
      	H4: '4', H5: '1', H6: '9', H9: '5',
      	I5: '8', I8: '7', I9: '9'
      }, true);
    });
		casper.wait(1000, function() {
      this.click('input[value="Solve!"]', function() {
        expect('p').to.have.text('Go away:');
        expect('#solution-table').to.be.inDOM;
      });
  	});
	});
});
