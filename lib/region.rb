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

  def contains?(square)
    @squares.include?(square)
  end

  def number_too_big?
    max_number = @squares.count 
    @squares.count{|square| square.number > max_number} > 0
  end
end
