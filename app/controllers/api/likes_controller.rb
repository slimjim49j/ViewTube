class Api::LikesController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :destroy]
    
    # fetch all likes for the current user
    def index
        @likes = Like.where(channel_id: current_user.channel.id)
        render :index
    end
    
    # create a like for the current user
    def create
        params[:like][:channel_id] = current_user.channel.id
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        
        if @like.destroy
            render :show
        else
            render json: ["Delete like failed"], status: 404
        end
    end



    private
    def like_params
        params.require(:like).permit(:likable_type, :likable_id, :channel_id, :dislike)
    end
end
