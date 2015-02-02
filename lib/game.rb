['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}

class Game



  def board
    @board = Board.new
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(@board)
  end

  def make_a_move
    Board.new.regions.first.squares.first.number = 1
  end

end