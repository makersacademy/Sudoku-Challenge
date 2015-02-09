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
    raise 'game finished' if finished?
    chosen_square = board.unplayed_squares.first
    available_moves = board.available_moves(chosen_square)
    raise 'no available moves' if available_moves.count == 0
    chosen_square.number = board.available_moves(chosen_square).first
  end

  def finished?
    board.unplayed_squares.count == 0
  end

  def unmake_last_move
    last_played_square = @board.squares[-1]
    @board.remove_play(last_played_square)
  end

end
