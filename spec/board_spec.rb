require 'board'

describe Board do

  let(:board)  { Board.new }
  let(:region) { double :region }

  it 'can contain a region' do
    board.add(region)
    expect(board.regions).to include(region)
  end

  context 'size' do
    it 'has one box when size 1' do
      board = Board.new(1)
      expect(board.regions.select{|region| region.type == :box}.count).to eq(1)
    end

    it 'has four boxes when size 2' do
      board = Board.new(2)
      expect(board.regions.select{|region| region.type == :box}.count).to be(4)
    end

  end

  context 'game play' do
    it 'knows there is one square to play in a size 1*1 board' do
      # expect(region).to receive(:type).and_return(:box)

      # expect(region).to receive(:squares).and_return([(double :square, :played? => false)])
      # expect(square).to receive(:unplayed?).and_return(false)
      puts board
      puts board.regions
      puts board.regions.count
      expect(board.unplayed_squares_count).to eq(1)
    end
  end

end