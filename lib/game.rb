class Game
['board','region','square','board_viewer'].each {|file| require file}
  def board
    Board.new
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(Board.new)
  end

end