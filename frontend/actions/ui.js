export const RECEIVE_UPLOAD_MODAL_STATUS = "RECEIVE_UPLOAD_MODAL_STATUS";
export const RECEIVE_SEARCH_BAR_STATUS = "RECEIVE_SEARCH_BAR_STATUS";

export const receiveUploadModalStatus = status => ({
    type: RECEIVE_UPLOAD_MODAL_STATUS,
    status,
});

export const receiveSearchBarStatus = status => ({
    type: RECEIVE_SEARCH_BAR_STATUS,
    status,
})