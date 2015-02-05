['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}

class Game

  def initialize
    @board = Board.new.populate
  end

  def board
    @board
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(@board)
  end

  def make_a_move
    chosen_square = board.unplayed_squares.sample
    chosen_square.number = board.available_moves(chosen_square).sample
  end

  def finished?
    board.unplayed_squares.count == 0
  end

end