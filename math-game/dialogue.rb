# dialogue.rb


def welcome
  puts "\n----- WELCOME TO THE GAME -----"
end

def next_turn(plyrs)
  question = Question.new

  current_ind = Player.up_next
  current_plyr = plyrs[current_ind - 1]

  puts "\n----- NEW TURN ------"
  puts "Player #{current_ind}: What does #{question.int_1} plus #{question.int_2} equal?"

  if gets.chomp.to_i === question.answer
    puts "Player #{current_ind}: Good."
  else
    puts "Player #{current_ind}: Bad."
    current_plyr.misanswer
  end
  # The following could be improved for modularity, but for now, it's configured for two plyrs.
  puts "P#{plyrs[0].index}: #{plyrs[0].lives}/3 vs. P#{plyrs[1].index}: #{plyrs[1].lives}/3"

  Player.next_player
end

def over
  puts "\n----- GAME OVER ------"
  puts "Good Bye!"
end