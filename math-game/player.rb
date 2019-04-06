# player.rb

class Player

  attr_reader :index, :lives

  @@player_count = 0
  @@up_next = 1

  def initialize
    @@player_count += 1
    @index = @@player_count
    @lives = 3
  end

  def misanswer
    @lives -= 1
  end

  def self.next_player
    if @@player_count == 1

    elsif @@up_next == @@player_count
      @@up_next = 1
    else
      @@up_next += 1
    end
  end

  def self.up_next
    @@up_next
  end

end
