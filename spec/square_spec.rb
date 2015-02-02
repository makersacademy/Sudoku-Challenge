require 'square'

describe Square do

  let(:square) { Square.new }

  it 'starts off without a number' do
    expect(square.number).to be(nil)
  end

  it 'can have a number' do
    square.number = 1
    expect(square.number).to eq(1)
  end

end