require 'spec_helper'
require 'square'

describe Square do
  let(:square) { Square.new }

  it 'starts off without a number' do
    expect(square.number).to be(nil)
  end

  it 'can have a number' do
    square.number = 1
    expect(square.number).to eq(1)
  end

  it 'can remove a number' do
    square.number = 1
    square.remove_number
    expect(square.number).to be nil
  end

  it 'knows if it has been played' do
    expect(square.played?).to be false
    square.number = 1
    expect(square.played?).to be true
  end

  context 'legal moves' do
    it 'must be an integer' do
      expect { square.number = 0.5 }.to raise_error(RuntimeError)
    end

    it 'must be greater than zero' do
      expect { square.number = 0 }.to raise_error(RuntimeError)
    end
  end
end
