# main.rb

require './player'
require './question'
require './dialogue'

players = [Player.new, Player.new];

welcome

while players[0].lives  > 0 && players[1].lives > 0 do

  next_turn(players)

end

over