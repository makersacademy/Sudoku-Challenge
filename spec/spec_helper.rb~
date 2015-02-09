require "codeclimate-test-reporter"
CodeClimate::TestReporter.start

ENV["RACK_ENV"] = 'test'
require_relative '../lib/sudoku.rb'
require 'capybara/rspec'

Capybara.app = Sudoku.new

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end


end