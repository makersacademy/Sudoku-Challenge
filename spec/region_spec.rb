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


end