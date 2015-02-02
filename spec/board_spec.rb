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

  

end