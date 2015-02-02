require 'region'

describe Region do

  it 'is a row, column or box' do
     region = Region.new
     expect(region.type).to eq(:row).or eq(:column).or eq(:box) 
  end

end