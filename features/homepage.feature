Feature: Sudoku Solver
  As a fan of sudoku, who is stuck
  I want to use a sudoku solver
  So that I can get help solving the puzzle

  Scenario: Solving a Sudoku
    Given I am on the homepage
    When I fill in the grid
    And I click submit
    Then I should see a solution

  Scenario: Generating a Sudoku Puzzle
    Given I am on the homepage
    When I click generate
    Then I should see an unfinished sudoku
