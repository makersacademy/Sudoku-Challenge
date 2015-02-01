require_relative './grid_creator'

class Grid

  include GridCreator

  attr_reader :cells, :rows, :columns, :boxes, :unsolved_cells

  def initialize(puzzle)
    @cells = puzzle.split('').map {|v| Cell.new(v) }
    create_rows
    create_columns
    create_boxes
  end

  def update
    cells.each do |cell| 
      cell.add_neighbours(self)
      cell.find_solutions
    end
  end

  def find_unsolved
    @unsolved_cells = self.cells.select{|cell| cell.value == 0}
  end

  def solve
    update
    find_unsolved
      while @unsolved_cells.count > 0 do
        update
        find_unsolved
      end
      string_solution
  end

  def string_solution
    cells.map{|cell|cell.value}.join('')
  end


end