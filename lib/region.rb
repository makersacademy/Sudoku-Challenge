class Region

  def type
    :box
  end

  def type=(type)

  end

  def add(square)
    @square = square
  end

  def squares
    [@square]
  end
end
