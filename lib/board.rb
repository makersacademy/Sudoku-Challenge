['board','region','square','board_viewer'].each {|file| require_relative file + '.rb'}
class Board

  #TODO refactor
  def initialize(size = 1)
    @regions = []
    @size = size
    @number_elements = size**2

    (1..@number_elements).each do |box|
      box = Region.new
      box.type = :box
      (1..@number_elements).each do |square|
        box.add(Square.new)
      end
      add(box)
    end
  end

  def add(region)
    @regions << region
  end

  def regions
    @regions
  end

  def unplayed_squares_count
    @regions.map {|region| region.squares}.flatten.select{|square| !square.played?}.count
  end


end
