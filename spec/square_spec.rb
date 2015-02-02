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

  it 'knows if it has been played' do
    expect(square.played?).to be false
    square.number = 1
    expect(square.played?).to be true
  end

end