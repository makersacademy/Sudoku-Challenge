class Grid

	
	attr_accessor :cells, :rows, :columns, :boxes

	def initialize(puzzle)
		@cells = puzzle.split('').map {|v| Cell.new(v) }
	end

	def create_rows
		@rows = cells.each_slice(9).to_a
	end

	def create_columns
		@columns = create_rows.transpose
	end

	def create_boxes
		@boxes = []
    9.times { @boxes << Array.new}
    triplets_array = @cells.each_slice(3).to_a
    boxes_enum = [0,1,2,0,1,2,0,1,2,3,4,5,3,4,5,3,4,5,6,7,8,6,7,8,6,7,8].each
    triplets_array.each{|segment| @boxes[boxes_enum.next].concat([segment])}
    @boxes.each{|e| e.flatten!}
	end


end