# Sudoku-Challenge

[![Test Coverage](https://codeclimate.com/github/chandley/Sudoku-Challenge/badges/coverage.svg)](https://codeclimate.com/github/chandley/Sudoku-Challenge)
[![Code Climate](https://codeclimate.com/github/chandley/Sudoku-Challenge/badges/gpa.svg)](https://codeclimate.com/github/chandley/Sudoku-Challenge)

## Summary

Build a Sudoku checker that can automatically generate and solve any 9 x 9 [Sudoku](http://en.wikipedia.org/wiki/Sudoku) grid

### Problem

see below

### Languages/Platforms/Tools

| Languages | Technologies  | Testing Frameworks| Misc
| :-------------------------------------------- |:--------------|:-----------|:----|
| Ruby      |  Sinatra      | Rspec             |               |
|           |               |                   |               |
|           |               |                   |  
|           |               |

### Solution

* Squares can hold a number, check for legal plays. 
* Regions hold squares, check for legal combinations of squares
* Board holds squares and regions. Checks square play legal for all regions on board.
* Board maker populates board with squares and regions. Size can be set.
* Board viewer shows the board
* Game holds a board, can choose a play from legal moves.

The game currently chooses a legal play in a random square

### Setup
```
rackup
```
* localhost:9292
* select board size 2, click 'New Game'
* click 'Advance' button to make moves

### Tests

cucumber, rspec

### Images

![board](/public/img/board2.png)

### To do

* Game solving algoritm not complete - can't solve 9x9 board


### Learning points

* Cucumber
* Doubling
* Object design
* Abstraction



## Unsolved

![unsolved](/public/img/sudoku_unsolved.png)

## Solved

![solved](/public/img/sudoku_solved.png)


