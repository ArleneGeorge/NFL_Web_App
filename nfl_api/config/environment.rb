# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

require 'csv'

p CSV.foreach(Rails.root.join("Basic_Stats.csv"), :headers => true).select{|row| row['Current Team'] == 'Denver Broncos'}