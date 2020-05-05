import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session";
import { receiveUploadModalStatus } from "../../actions/ui";
import NavBar from "./nav_bar";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    path: (ownProps.location.pathname + ownProps.location.search),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveModalStatus: status => dispatch(receiveUploadModalStatus(status)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));