require 'board_maker'

describe BoardMaker do

  let(:maker) { BoardMaker.new }
  let(:board) { double :board, :size => 1 }
  let(:medium_board) { double :board, :size => 2 }

  it 'makes 1 square for a size 1 board' do
    expect(maker.squares(board).count).to eq 1
  end

  it 'makes 16 squares for a size 2 board' do
    expect(maker.squares(medium_board).count).to eq 16
  end

  it 'makes 4 rows for a size 2 board' do
    expect(maker.rows(medium_board).count).to eq 4
  end

  it 'makes 4 columns for a size 2 board' do
    expect(maker.columns(medium_board).count).to eq 4
  end

  it 'makes 4 boxes for a size 2 board' do
    expect(maker.boxes(medium_board).count).to eq 4
  end

end