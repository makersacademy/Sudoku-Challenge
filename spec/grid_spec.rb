require './lib/grid'
require './lib/cell'

describe Grid do

	let(:grid) {Grid.new('005000009009000000000000000000000000000000000000000000000000000000000000000000000')}

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
			expect(grid.rows.length).to eq(9)
		end

		it "of rows should be able reference a value" do
			expect(grid.rows[0][2].value).to eq(5)
		end

		it "should be able to create columns" do
			expect(grid.columns.length).to eq(9)
		end

		it "of columns should be able reference a value" do
			expect(grid.columns[2][0].value).to eq(5)
		end

		it "should be able to create boxes with a cell value" do
			expect(grid.boxes[0][2].value).to eq(5)
		end

		it "should be able to find neighbours of a cell" do
			grid.add_neighbours(grid.cells[0])
			expect(grid.cells[0].neighbours).to eq([0,5,9])
		end

	end

end