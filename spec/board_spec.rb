require 'spec_helper'
require 'board'

describe Board do
  # let(:board)  { Board.new }
  let(:region) { double :region }
  let(:board) { Board.new}
  let(:small_board) { Board.new.populate }
  let(:med_board) { Board.new(2).populate }


  it 'can contain a region' do
    board.add_region(region)
    expect(board.regions).to include(region)
  end

  context 'size' do
    it 'has one box when size 1' do
      boxes = small_board.regions.select{ |region| region.type == :box }
      expect(boxes.count).to eq(1)
    end

    it 'has four boxes when size 2' do
      boxes = med_board.regions.select{ |region| region.type == :box }
      expect(boxes.count).to eq(4)
    end

    it 'knows which regions contain a given square' do
      square = double :square
      region = double :region, :squares => [square]
      board.add_region(region)
      expect(board.regions_containing(square)).to include region
    end
  end

  context 'game play' do
    it 'knows there is one square to play in a size 1*1 board' do
      expect(small_board.unplayed_squares.count).to eq(1)
    end

    it 'knows there are 16 squares to play in a size 4*4 board' do
      expect(med_board.unplayed_squares.count).to eq(16)
    end

    it 'can play a square' do
      square = small_board.squares.first
      small_board.play(square, 1)
      expect(small_board.unplayed_squares.count).to eq(0)
    end

    it 'cant play a square twice' do
      square = small_board.squares.first
      small_board.play(square, 1)
      expect { small_board.play(square, 1)} .to raise_error(RuntimeError)
    end

    it 'knows what order two squares were played in' do
      board = Board.new(2).populate
      square1 = board.squares.first
      square2 = board.squares.last
      board.play(square2, 1)
      board.play(square1, 2)
      expect(board.play_order(square2)<board.play_order(square1)).to be true
    end

    it 'can remove play for a square' do
      square = small_board.squares.first
      small_board.play(square, 1)
      small_board.remove_play(square)
      expect(small_board.unplayed_squares.count).to eq(1)
    end

  end

  context 'legal moves' do
    it 'knows which moves are available for a square' do
      square = med_board.squares.first
      expect(med_board.available_moves(square)).to eq([1,2,3,4])
    end
  end

end
