require 'sinatra/base'
require_relative 'game.rb'


class Sudoku < Sinatra::Base
  set :views, Proc.new { File.join(root, "..", "views") }

  get '/play' do
    # GAME = Game.new if GAME.finished? # this needs refactoring!
    number_moves = params[:number_moves].to_i
    number_moves.times { GAME.make_a_move } 
    @board_view = GAME.show_board
    @finished = GAME.finished?
    erb :index
  end

  get '/' do
    erb :board_select
  end

  get '/new_game' do
    GAME = Game.new(params[:board_size].to_i)
    redirect '/play'
  end

  # post '/advance' do
  #   number_moves = params[:number_moves].to_i
  #   number_moves.times { GAME.make_a_move }
  #   redirect '/'
  # end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
