import { RECEIVE_CHANNEL } from "../actions/channels";

const initialState = {

}

export default (state = initialState, { type, channel }) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (type) {
        case RECEIVE_CHANNEL:
            nextState[channel.id] = channel;
            return nextState;
        default:
            return state
    }
};