class Cell

	attr_accessor :value, :neighbours, :row_ref, :col_ref, :box_ref

	CELL_VALUES = [1,2,3,4,5,6,7,8,9]

	def initialize(value)
		raise 'Values must be less than 10!' unless value.length == 1
		@value = value.to_i
		@neighbours = []
	end

	def solved?
		@value > 0
	end

end