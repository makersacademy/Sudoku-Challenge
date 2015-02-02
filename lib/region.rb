class Region

  def initialize
    @squares = []
  end

  def type
    :box
  end

  def type=(type)

  end

  def add(square)
    @squares << square
  end

  def squares
    @squares
  end
end
