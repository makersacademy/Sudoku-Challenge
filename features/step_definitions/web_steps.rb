Given(/^I visit the homepage$/) do
  visit('/')
end

When(/^I follow "(.*?)"$/) do |link|
  click_link(link)
end

When(/^I click button "(.*?)"$/) do |button|
  click_button(button)
end

Then(/^I see a "(.*?)" message$/) do |message|
  expect(page).to have_content(message)
end

Then(/^I see a blank board$/) do
  expect(page).to have_content('0')
end

Given(/^I have a single square game$/) do
  step('I visit the homepage')
  step('I click button "New Game"')
end

When(/^I get the computer to make a move$/) do
  fill_in('number_moves', :with => '1')
  click_button('Advance')
end

Then(/^I see a partly completed board$/) do
  expect(page).to have_content('0')
  expect(page).to have_content('1')
end

Then(/^I see a completed board$/) do
  expect(page).not_to have_content('0')
end

Given(/^I have a new game$/) do
  step ('I visit the homepage')
  fill_in('board_size', :with =>'3')
  step('I click button "New Game"')
end

When(/^I select a number of moves to populate$/) do
  fill_in('number_moves', :with => '7')
  click_button('Advance')
end

When(/^I get the computer to populate all the cells$/) do
  fill_in('number_moves', :with => '81')
  click_button('Advance')
end