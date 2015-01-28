require './lib/cell'

describe Cell do

	let(:cell) {Cell.new('1')}

  it "should contain a value" do
		expect(cell.value).to eq(1)
	end

	it "should raise error if does not contain a value between 0-9" do
		expect(lambda{Cell.new('10')}).to raise_error('Values must be less than 10!')
	end

  it 'should know when it is solved' do
    expect(cell.solved?).to eq(true)
  end

  it 'should know what row it resides in' do
    
  end




end