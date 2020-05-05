import { connect } from 'react-redux'
import { receiveErrorPopupStatus } from "../../actions/ui";
import ErrorPopup from "./error_popup";

const mapStateToProps = (state) => ({
    errorPopupStatus: state.ui.errorPopup,
})

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrorPopupStatus: status => dispatch(receiveErrorPopupStatus(status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup);
