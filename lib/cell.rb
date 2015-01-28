class Cell

	attr_accessor :value

	def initialize(value)
		raise 'Values must be less than 10!' unless value.length == 1
		@value = value.to_i
	end

	def solved?
		@value > 0
	end

end