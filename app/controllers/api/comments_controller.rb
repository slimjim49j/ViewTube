class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    
    def index
        @comments = Comment.where(video_id: params[:video_id]).includes(:channel)
        render :index
    end
    
    def create
        params[:comment][:channel_id] = current_user.channel.id
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :channel_id, :video_id, :parent_comment_id)
    end
end
