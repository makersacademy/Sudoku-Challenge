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

  def regions(board)
    [rows(board), columns(board), boxes(board)].flatten(1)
  end

  def populate_regions(board)
    region_hash = {:row => rows(board), :column => columns(board), :box => boxes(board)}
    region_hash.each do |type, regions|
      regions.each do |squares|
        region = Region.new
        squares.each {|square| region.add(square)}
        region.type = type
        board.add(region)
      end
    end
  end





end