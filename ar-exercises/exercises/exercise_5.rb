require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "\nExercise 5"
puts "----------"

# Your code goes here ...
@all_revenue = Store.sum("annual_revenue")
puts "Total annual revenue: #{@all_revenue}"

@avg_revenue = @all_revenue/Store.count
puts "Average annual revenue: #{@avg_revenue}"

@stores_overmil = Store.where("annual_revenue > 1000000").count

puts "Number of stores making over a mil: #{@stores_overmil}"