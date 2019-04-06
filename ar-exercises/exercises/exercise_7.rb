require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'
require_relative './exercise_6'

puts "\nExercise 7"
puts "----------"

# Your code goes here ...
class Store
  validates :name, length: { minimum: 3 }
  validates :annual_revenue, presence: { message: "Stores must have annual_revenue!" }
  validates :annual_revenue, numericality: { only_integer: true, greater_than: -1, message: "Revenue must be equal to or greater than zero!" }
  validate :has_apparel

  def has_apparel
    if !(mens_apparel.present?) && !(womens_apparel.present?)
      errors.add( :has_apparel, "Store needs to offer apparel for sale!")
    end
  end
end

class Employee
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :hourly_rate, numericality: { only_integer: true, greater_than: 39, less_than: 201}
  validates_associated :stores
end

@new_store_name = gets.chomp
@new_store = Store.create(name: @new_store_name)

if @new_store.errors.any?
  @new_store.errors.each do |att, mes|
    puts "#{att}: #{mes}"
  end
end