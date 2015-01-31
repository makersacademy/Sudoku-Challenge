require './lib/grid'

describe Grid do

	let(:grid) {Grid.new('005000009009000000000000000000000000000000000000000000000000000000000000000000000')}
	let(:gridtest) {Grid.new('530070000600195000098000060800060003400803001700020006060000280000419005000080079')}
	let(:gridfalse) {Grid.new('535070000600195000098000060800060003400803001700020006060000280000419005000080079')}

	context "initialization" do

		it "should contain 81 values" do
			expect(grid.cells.length).to eq(81)
		end

		it "should have cell with a value in" do
			expect(grid.cells[2].value).to eq(5)
		end

		it "should be able to check for duplicates in rows" do
			expect(gridfalse.duplicates?).to eq(true)
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

	end

	context "solver" do

		it "should be able to apply neighbours to all cells" do
			gridtest.update
			expect(gridtest.cells[0].neighbours).to eq([5, 3, 0, 7, 6, 8, 4, 9])
		end

		it "should be able to count number of unsolved cells" do
			gridtest.find_unsolved
			expect(gridtest.unsolved_cells.length).to eq(51)
		end

		it "should be able to solve a sudoku puzzle" do
			gridtest.solve
			expect(gridtest.unsolved_cells.count).to eq(0)
		end

		it "should be able to return the solution as a string" do
			gridtest.solve
			expect(gridtest.string_solution).to eq('534678912672195348198342567859761423426853791713924856961537284287419635345286179')
		end

	end


end