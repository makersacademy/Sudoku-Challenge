require './lib/grid'

describe Grid do

	let(:grid) {Grid.new('005000000009000000000000000000000000000000000000000000000000000000000000000000000')}

	context "initialization" do
		
		it "should contain 81 values" do
			expect(grid.cells.length).to eq(81)
		end

		it "should have cell with a value in" do
			expect(grid.cells[2].value).to eq(5)
		end

	end

	context "units" do

		it "should be able to create rows" do
			grid.create_rows
			expect(grid.rows[0].length).to eq(9)
		end

		it "should be able to create columns" do
			grid.create_columns
			expect(grid.columns[0].length).to eq(9)
		end

		it 'should be able to create boxes' do
			grid.create_boxes
			expect(grid.boxes[1].length).to eq(9)
		end
	end

end