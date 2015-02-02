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

end