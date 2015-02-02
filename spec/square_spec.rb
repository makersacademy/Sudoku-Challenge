require 'square'

describe Square do

  it 'starts off without a number' do
    square = Square.new
    expect(square.number).to be(nil)
  end

end