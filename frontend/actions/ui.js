export const RECEIVE_UPLOAD_MODAL_STATUS = "RECEIVE_UPLOAD_MODAL_STATUS";
export const RECEIVE_SEARCH_BAR_STATUS = "RECEIVE_SEARCH_BAR_STATUS";
export const RECEIVE_ERROR_POPUP_STATUS = "RECEIVE_ERROR_POPUP_STATUS";

export const receiveUploadModalStatus = status => ({
    type: RECEIVE_UPLOAD_MODAL_STATUS,
    status,
});

export const receiveSearchBarStatus = status => ({
    type: RECEIVE_SEARCH_BAR_STATUS,
    status,
})

export const receiveErrorPopupStatus = status => ({
    type: RECEIVE_ERROR_POPUP_STATUS,
    status,
})