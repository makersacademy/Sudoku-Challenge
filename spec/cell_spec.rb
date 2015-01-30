require './lib/cell'
require './lib/grid'

describe Cell do

	let(:cell) {Cell.new('1')}
	let(:cell0) {Cell.new('0')}
	let(:grid) {Grid.new('005000009009000000000000000000000000000000000000000000000000000000000000000000000')}



  it "should contain a value" do
		expect(cell.value).to eq(1)
	end

	it "should raise error if does not contain a value between 0-9" do
		expect(lambda{Cell.new('10')}).to raise_error('Values must be less than 10!')
	end

  it 'should know when it is solved' do
    expect(cell.solved?).to eq(true)
  end

	it "should be able to find neighbours of a cell" do
		grid.cells[0].add_neighbours(grid)
		expect(grid.cells[0].neighbours).to eq([0,5,9])
	end

	it "should be able to find potential solutions for a cell" do
 		cell0.neighbours = [3,4,5,6,7,8,9]
 		cell0.find_solutions
		expect(cell0.solutions).to eq([1,2])
	end

	it "should be able to apply solution to a cell" do
 		cell0.neighbours = [2,3,4,5,6,7,8,9]
 		cell0.find_solutions
		expect(cell0.value).to eq(1)
	end


end