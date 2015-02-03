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
    
    it 'knows if a number is too big' do
      region.add square
      expect(square).to receive(:number).and_return(2)
      expect(region.number_too_big?).to be true
    end

    it 'knows if a number is not too big' do
      region.add square
      expect(square).to receive(:number).and_return(1)
      expect(region.number_too_big?).to be false
    end




  end


end