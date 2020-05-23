class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    
    def index
        @comments = Comment.where(video_id: params[:video_id]).includes(:channel, :user)
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

    def update
        @comment = selected_comment
        if @comment && @comment.update(comment_params)
            render :show
        elsif !@comment
            render json: ['Could not locate comment'], status: 400
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = selected_comment
        if @comment
            @comment.destroy
            render :show
        else
            render json: ['Could not locate comment'], status: 400
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :channel_id, :video_id, :parent_comment_id)
    end

    def selected_comment
        Comment.find(params[:id])
    end
end
