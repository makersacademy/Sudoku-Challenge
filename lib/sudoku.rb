require 'sinatra/base'
require_relative 'game.rb'


class Sudoku < Sinatra::Base
  set :views, Proc.new { File.join(root, "..", "views") }

   GAME = Game.new

  get '/' do
    'Hello Sudoku!'
    @board_view = GAME.show_board
    erb :index
  end

  post '/advance' do
    number_moves = params[:number_moves].to_i
    puts number_moves
    number_moves.times { GAME.make_a_move }
    redirect '/'
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
