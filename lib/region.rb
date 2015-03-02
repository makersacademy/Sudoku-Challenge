class Region
  attr_reader :squares
  attr_writer :type

  def initialize
    @squares = []
  end

  def type
    @type ||= :box
  end

  def add(square)
    @squares << square
  end

  def contains?(square)
    @squares.include?(square)
  end

  def number_too_big?
    max_number = @squares.count 
    @squares.count{|square| square.number > max_number} > 0
  end

  #TODO may be inefficient for large regions
  def number_duplicated?
    numbers.detect {|number| numbers.count(number) > 1} ? true : false
  end

  def possible_plays
    all_numbers = (1..@squares.count).to_a
    all_numbers.reject {|i| numbers.include?(i)}
  end
  
  private

  def numbers
    @squares.map{|square| square.number}
  end
end
