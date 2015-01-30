require './lib/cell'

describe Cell do

	let(:cell) {Cell.new('1')}
	let(:cell0) {Cell.new('0')}

  it "should contain a value" do
		expect(cell.value).to eq(1)
	end

	it "should raise error if does not contain a value between 0-9" do
		expect(lambda{Cell.new('10')}).to raise_error('Values must be less than 10!')
	end

  it 'should know when it is solved' do
    expect(cell.solved?).to eq(true)
  end

  it "should be able to find potential solutions for a cell" do
  	cell0.neighbours = [2,3,4,5,6,7,8,9]
		expect(cell0.find_solutions).to eq([1])
	end

end