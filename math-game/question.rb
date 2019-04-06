# question.rb

class Question

  attr_reader :int_1, :int_2, :answer

  def initialize
    @int_1 = rand(10)
    @int_2 = rand(10)
    @answer = @int_1 + @int_2
  end

end