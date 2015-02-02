['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}

class Game

  def board
    Board.new
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(Board.new)
  end

end