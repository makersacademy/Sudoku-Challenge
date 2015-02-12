# Sudoku Challenge

[![Code
Climate](https://codeclimate.com/github/nickbdyer/Sudoku-Challenge/badges/gpa.svg)](https://codeclimate.com/github/nickbdyer/Sudoku-Challenge) 
[![Test Coverage](https://codeclimate.com/github/nickbdyer/Sudoku-Challenge/badges/coverage.svg)](https://codeclimate.com/github/nickbdyer/Sudoku-Challenge) [![Build Status](https://travis-ci.org/nickbdyer/Sudoku-Challenge.svg)](https://travis-ci.org/nickbdyer/Sudoku-Challenge)

### The Brief

Build a Sudoku checker that can automatically generate and solve any 9 x 9 [Sudoku](http://en.wikipedia.org/wiki/Sudoku) grid such as the one below:

##### Unsolved

![unsolved](/public/img/sudoku_unsolved.png)

##### Solved

![solved](/public/img/sudoku_solved.png)

> Images courtesy of Wikipedia where you can find more [information](http://en.wikipedia.org/wiki/Sudoku).


### Method

Throughout the course, when dealing with Javascript projects, the decision on
testing frameworks has often been difficult. Since I wanted to do this project
BDD throughout, I wanted to settle in with a testing suite. I opted for
CucumberJS and Mocha with Chai for Acceptance Testing and Unit Testing
respectively. I chose Mocha with Chai over Jasmine, since I have found Mocha
plays better with Istanbul for Test Coverage.

##### Domain Model

The Sudoku Solver should allow people to enter numbers into cells arranged in
a 9 x 9 grid. Cells should only have one of the numbers 1-9. Rows should only have
the numbers 1-9. Columns should only have the numbers 1-9. Each 3 x 3 mini grid 
should only have the numbers 1-9.

##### Algorithms

During my research around the Sudoku problem, I came across many solutions to
the problem. Backtracing, Brute Force, Stochastic Search, Constraint
Programming and Exact Cover. I am not familiar with algorithmic solutions to
problems, but my research led me to believe that considering the challenge as
an instance of the Exact Cover problem, would allow me to use Knuth's Dancing
Links Algorithm. This algorithm considers the 9x9 Sudoku Grid as a constraint
matrix with 729 solution sets and 324 constraint sets.

I understand that this solution is extremely efficient, however, I struggled to
see how I could implement this solution in a TDD way, since the solution itself
was very complicated. 


######Classes

- Cell
- Grid
