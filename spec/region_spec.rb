require 'spec_helper'
require 'region'

describe Region do
  let(:region) { Region.new }
  let(:square) { double :square }

  it 'is a row, column or box' do
    region = Region.new
    expect(region.type).to eq(:row).or eq(:column).or eq(:box) 
  end

  it 'can contain a square' do
    region.add square
    expect(region.squares).to include(square)
  end

  it 'knows if it contains a square' do
    region.add square
    expect(region.contains?(square)).to be true
  end

  it 'knows if it does not contain a square' do
    expect(region.contains?(square)).to be false
  end

  context 'legal moves' do
    let(:square1) { double :square, number: 1 }
    let(:square2) { double :square, number: 2 }
    let(:square3) { double :square, number: 3 }
    let(:square4) { double :square, number: nil }
    
    it 'knows if a number is too big for 1 element region' do
      region.add square
      expect(square).to receive(:number).and_return(2)
      expect(region.number_too_big?).to be true
    end

    it 'knows if a number is not too big for 1 element region' do
      region.add square
      expect(square).to receive(:number).and_return(1)
      expect(region.number_too_big?).to be false
    end

    it 'knows if a number is too big for 4 element region' do
      [square, square1, square2, square3].each {|square| region.add(square)}
      expect(square).to receive(:number).and_return(5)
      expect(region.number_too_big?).to be true
    end

    it 'knows if a number is not too big for 4 element region' do
      [square, square1, square2, square3].each { |square| region.add(square) }
      expect(square).to receive(:number).and_return(4)
      expect(region.number_too_big?).to be false
    end

    it 'knows if a number is not duplicated for 4 element region' do
      [square, square1, square2, square3].each { |square| region.add(square) }
      expect(square).to receive(:number).at_least(:once).and_return(4)
      expect(region.number_duplicated?).to be false
    end

    it 'knows if a number is duplicated for 4 element region' do
      [square, square1, square2, square3].each { |square| region.add(square) }
      expect(square).to receive(:number).at_least(:once).and_return(3)
      expect(region.number_duplicated?).to be true
    end

    it 'knows which numbers are available to play' do
      [square1, square2, square3, square4].each { |square| region.add(square) }
      expect(region.possible_plays).to include (4)
    end

  end

end
