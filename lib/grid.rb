class Grid

	BOX_OF_INDEX = [
      0,0,0,1,1,1,2,2,2,0,0,0,1,1,1,2,2,2,0,0,0,1,1,1,2,2,2,
      3,3,3,4,4,4,5,5,5,3,3,3,4,4,4,5,5,5,3,3,3,4,4,4,5,5,5,
      6,6,6,7,7,7,8,8,8,6,6,6,7,7,7,8,8,8,6,6,6,7,7,7,8,8,8
    ]

	attr_reader :cells, :rows, :columns, :boxes, :unsolved_cells

	def initialize(puzzle)
		@cells = puzzle.split('').map {|v| Cell.new(v) }
		create_rows
		create_columns
		create_boxes
	end

	def duplicates?
		self.rows[0].uniq! == nil
	end

	def create_rows
		@rows = cells.each_slice(9).to_a
	end

	def create_columns
		@columns = create_rows.transpose
	end

	def create_boxes
		@boxes = []
		iterator = BOX_OF_INDEX.each
    9.times { @boxes << Array.new}
    @cells.each{|cell| @boxes[iterator.next].concat([cell])}
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