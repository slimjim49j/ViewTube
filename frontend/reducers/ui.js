import { RECEIVE_UPLOAD_MODAL_STATUS } from "../actions/ui";

const _defaultState = {
    uploadModal: false
}

export default (state = _defaultState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_UPLOAD_MODAL_STATUS:
            nextState.uploadModal = action.status;
            return nextState;
        default:
            return state;
    }
}