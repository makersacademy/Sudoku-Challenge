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

Squares belong to generic Region objects which can be rows, columns or boxes. A Board Maker object sets these up. The Board contains regions, and can check for legal moves. Game chooses a legal move in a square to play.

The game currently chooses a legal play in a random square

### Setup
```
rackup
```
localhost:9292
select board size 2, click 'New Game'

http

### Tests

cucumber, rspec

### Images

![board](/public/img/board.png)

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


