import { RECEIVE_UPLOAD_MODAL_STATUS, RECEIVE_SEARCH_BAR_STATUS } from "../actions/ui";

const _defaultState = {
    uploadModal: false,
    searchBar: false,
}

export default (state = _defaultState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_UPLOAD_MODAL_STATUS:
            nextState.uploadModal = action.status;
            return nextState;
        
        case RECEIVE_SEARCH_BAR_STATUS:
            nextState.searchBar = action.status;
            return nextState;
            
        default:
            return state;
    }
}