require 'game' 

describe Game do

  let(:game) { Game.new }

  it 'has a board' do
    expect(game.board).not_to be(nil)
  end

end