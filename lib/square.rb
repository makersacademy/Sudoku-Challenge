class Square

  attr_accessor :number

  def number=(number)
    raise 'number must be an integer' unless number.is_a? Integer
    raise 'number must be greater than zero' if number < 1
    @number = number
  end

  def remove_number
    @number = nil
  end

  def number
    @number
  end

  def played?
    !@number.nil?
  end


end