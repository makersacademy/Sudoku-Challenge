require 'board'

describe Board do

  # let(:board)  { Board.new }
  let(:region) { double :region }

  it 'can contain a region' do
    board = Board.new
    board.add(region)
    expect(board.regions).to include(region)
  end

  context 'size' do
    it 'has one box when size 1' do
      board = Board.new
      expect(board.regions.select{|region| region.type == :box}.count).to eq(1)
    end

    it 'has four boxes when size 2' do
      board = Board.new(2)
      puts board.regions.map {|region| region.type}
      expect(board.regions.select{|region| region.type == :box}.count).to eq(4)
    end

  end

  context 'game play' do
    it 'knows there is one square to play in a size 1*1 board' do
      board = Board.new
      expect(board.unplayed_squares_count).to eq(1)
    end

    #TODO consider if redundant
    it 'knows there are 16 squares to play in a size 4*4 board' do
      board = Board.new(2)
      expect(board.unplayed_squares_count).to eq(16)
    end

  end

end