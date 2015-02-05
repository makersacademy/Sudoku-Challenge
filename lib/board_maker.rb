class BoardMaker

  def squares(board)
    board.squares
  end

  def rows(board)
    squares(board).each_slice(board.size**2).to_a
  end

  def columns(board)
    rows(board).transpose
  end

  def boxes(board)
    boxes = []
    rows(board).each_slice(board.size) do |rows_for_box|
      rows_for_box.transpose.each_slice(board.size) do |box_squares|
        boxes << box_squares.flatten
      end
    end
    boxes
  end

end