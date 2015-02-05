['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}
class Board

  attr_accessor :squares
  attr_reader :regions, :size
  #TODO refactor
  def initialize(size = 1)
    @regions = []
    @squares = []
    @size = size
    (@size**4).times {@squares << Square.new}
    BoardMaker.new.populate_regions(self)
  end

  def add(region)
    @regions << region
  end

  def unplayed_squares_count
    boxes = @regions.select {|region| region.type == :box}
    boxes.map {|region| region.squares}.flatten.select{|square| !square.played?}.count
  end


end
