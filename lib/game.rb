class Game

  def board
    Board.new
  end

  def show_board
    viewer = BoardViewer.new
    viewer.show(Board.new)
  end

end