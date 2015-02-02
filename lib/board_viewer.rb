class BoardViewer 

  def show(board)
    value = board.regions.first.squares.first.number
    [[value.nil? ? 0 : 1]]
  end

end