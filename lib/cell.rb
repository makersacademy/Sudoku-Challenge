class Cell

  attr_accessor :value, :neighbours, :solutions

  CELL_VALUES = [1,2,3,4,5,6,7,8,9]

  def initialize(value)
    raise 'Values must be less than 10!' unless value.length == 1
    @value = value.to_i
    @neighbours = []
    @solutions = []
  end

  def solved?
    @value > 0
  end

  def add_neighbours(grid)
    neighbour_arrays = grid.rows.select{|row| row.include?(self)} + grid.columns.select{|col| col.include?(self)} + grid.boxes.select{|box| box.include?(self)}
    self.neighbours = neighbour_arrays.flatten.map{|nei|nei.value}.uniq
  end

  def find_solutions
    if !solved?
      self.solutions = CELL_VALUES - neighbours
        if solutions.count == 1
          self.value = solutions.first
        end
    end
  end

end