class BoardMaker
  def populate_squares(board)
    (board.size**4).times { board.squares << Square.new }
  end

  def rows(board)
    board.squares.each_slice(board.size**2).to_a
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

  # TODO: this should be a board method
  def regions(board)
    [rows(board), columns(board), boxes(board)].flatten(1)
  end

  def regions_hash(board)
    { :row => rows(board), :column => columns(board), :box => boxes(board) }
  end

  def populate_regions(board)
    regions_hash(board).each do |type, regions|
      regions.each { |squares| populate_region(board, squares, type) }
    end
  end

  def populate_region(board, squares, type)
    region = Region.new
    squares.each { |square| region.add(square) }
    region.type = type
    board.add_region(region)
  end
end
