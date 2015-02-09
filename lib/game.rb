%w(board region square board_viewer board_maker).each.each {|file| require_relative file + '.rb'}

class Game

  def initialize(size=1)
    @board = Board.new(size).populate
  end

  def board
    @board
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(@board)
  end

  def make_a_move
    raise 'no available moves' if finished?
    chosen_square = board.unplayed_squares.first
    chosen_square.number = board.available_moves(chosen_square).first
  end

  def finished?
    board.unplayed_squares.count == 0
  end

end
