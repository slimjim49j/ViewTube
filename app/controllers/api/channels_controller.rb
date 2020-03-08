class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 401
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
        
        # add more error handling?
        # if @channel
        #     render :show
        # else
        #     render json: status: 404,
        # end
    end

    private
    def channel_params
        params.require(:channel).permit(:title, :description, :user_id)
    end
end
