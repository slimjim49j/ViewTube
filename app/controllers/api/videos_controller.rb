class Api::VideosController < ApplicationController
    before_action :require_logged_in, only: [:create]
    
    def index
        # debugger
        if (params[:video][:search].blank?) 
            @videos = Video.includes(:likes, :channel).all
        else
            @videos = Video.search(params[:video][:search])
        end
        render :index
    end
    
    def show
        @video = Video.find(params[:id])
        # @like_count = Like.where(channel_id: current_user.channel.id).count
        render :show
    end

    def create
        # set the video's channel to the current user's channel
        params[:video][:channel_id] = current_user.channel.id
        @video = Video.new(video_params);

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 401
        end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :video, :channel_id)
    end
end