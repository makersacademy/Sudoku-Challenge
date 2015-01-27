require './lib/grid'

describe Grid do

	let(:grid) {Grid.new('000000000000000000000000000000000000000000000000000000000000000000000000000000000')}

	it "should contain 81 values" do
		expect(grid.cells.length).to eq(81)
	end

	it "should have cell with a value of 0 in them" do
		expect(grid.cells[0].value).to eq(0)
	end

	it "should be able to create rows" do
		grid.create_rows
		expect(grid.rows.length).to eq(9)
	end

	it "should be able to create columns" do
		grid.create_columns
		expect(grid.columns.length).to eq(9)
	end

	it 'should be able to create boxes' do
		grid.create_boxes
		expect(grid.boxes.length).to eq(9)
	end

end