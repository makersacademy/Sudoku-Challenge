require 'board'

describe Board do

  let(:board)  { Board.new }
  let(:region) { double :region }

  it 'can contain a region' do
    board.add(region)
    expect(board.regions).to include(region)

  end

end