class Grid
	
	attr_accessor :cells, :rows, :columns


	def initialize(puzzle)
		@cells = puzzle.split('').map {|v| Cell.new(v) }
	end

	def create_rows
		@rows = cells.each_slice(9).to_a
	end

	def create_columns
		@columns = create_rows.transpose
	end


end