require 'spec_helper'
require 'game'

describe Game do

  let(:game) { Game.new }

  it 'has a board' do
    expect(game.board).not_to be(nil)
  end

  it 'can view the board' do
    expect(game.show_board).to eq([[0]])
  end

  it 'knows when the game is complete' do
    game.make_a_move
    expect(game.finished?).to be(true)
  end

  it 'can complete a size 2 game' do
    game2 = Game.new(2)
    expect(game2.finished?).to be(false)
    16.times { game2.make_a_move }
    expect(game2.finished?).to be(true)
  end

  it 'can complete a size 3 game' do
    game3 = Game.new(3)
    expect(game3.finished?).to be(false)
    81.times { game3.make_a_move }
    expect(game3.finished?).to be(true)
  end

end
