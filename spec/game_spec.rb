require 'game' 

describe Game do

  let(:game) { Game.new }

  it 'has a board' do
    expect(game.board).not_to be(nil)
  end

  it 'can view the board' do
    expect(game.show_board).to eq([[0]])
  end

end