Feature: See computer solution
  In order to browse sudoku solutions
  As sudoku fan
  I want to see the computer finish a game

  Scenario: See blank board
    Given I visit the homepage
    When I click button "New Game"
    Then I see a blank board

  Scenario: Complete single square game
    Given I have a single square game
    When I get the computer to make a move
    Then I see a completed board

  Scenario: I get a message when the game is completed
    Given I have a single square game
    When I get the computer to make a move
    Then I see a "Game Over" message

  Scenario: Populate the board
    Given I have a new game
    When I select a number of moves to populate
    Then I see a partly completed board

  Scenario: Complete board
    Given I have a new game 
    When I get the computer to populate all the cells
    Then I see a completed board

  Scenario: Computer completes the board
    Given I have a partly completed board
    When I select computer completes board
    Then I see a completed board