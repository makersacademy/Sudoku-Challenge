Given(/^I visit the homepage$/) do
  visit('/')
end

When(/^I follow "(.*?)"$/) do |link|
  click_link(link)
end


Then(/^I see a blank board$/) do
  expect(page).to have_content('0')
end

Given(/^I have a single square game$/) do
  step('I visit the homepage')
  step('I follow "New Game"')
end

When(/^I get the computer to populate a square$/) do
  fill_in('number_moves', :with => '1')
  click_button('Advance')
end


Then(/^I see a partly completed board$/) do
  expect(page).not_to have_content('0')
end

Given(/^I have a partly completed board$/) do
  pending # express the regexp above with the code you wish you had
end

When(/^I select computer completes board$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^I see a completed board$/) do
  expect(page).not_to have_content('0')
end