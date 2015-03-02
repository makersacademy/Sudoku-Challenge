require 'spec_helper'
require 'board_viewer'

['board', 'region', 'square'].each { |file| require file }

describe BoardViewer do
  it 'converts a one-by-one board into an array of row values' do
    board = Board.new
    region = Region.new
    region.type = :row
    region.add (square = Square.new)
    board.add_region (region)

    viewer = BoardViewer.new
    expect(viewer.show(board)).to eq( [[0]] )
  end
end
