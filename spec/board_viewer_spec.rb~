require 'spec_helper'
require 'board_viewer'

['board','region','square'].each {|file| require file}

describe BoardViewer do

  it 'converts a one-by-one board into an array of row values' do

    board = Board.new
    board.add (region = Region.new)
    region.add (square = Square.new)

    viewer = BoardViewer.new

    expect(viewer.show(board)).to eq( [[0]] )

  end






end