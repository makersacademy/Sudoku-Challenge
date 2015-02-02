class Region

  def type
    :box
  end

  def add(square)
    @square = square
  end

  def squares
    [@square]
  end
end
