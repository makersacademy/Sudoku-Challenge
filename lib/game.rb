['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}

class Game

  def initialize
    @board = Board.new
  end

  def board
    @board
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(@board)
  end

  def make_a_move
    region = @board.regions.first
    square = region.squares.first
    square.number = 1
  end

end