import { connect } from 'react-redux'
import { receiveErrorPopupStatus } from "../../actions/ui";
import ErrorPopup from "./error_popup";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errorPopupStatus: state.ui.errorPopup,
    path: (ownProps.location.pathname + ownProps.location.search),
})

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrorPopupStatus: status => dispatch(receiveErrorPopupStatus(status)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorPopup));
