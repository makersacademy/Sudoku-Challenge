class Square

  attr_accessor :number

  def number=(number)
    @number = number
  end

  def number
    @number
  end

  def played?
    !@number.nil?
  end


end