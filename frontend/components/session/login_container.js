import { connect } from "react-redux";
import {
    login,
    receiveSessionErrors,
} from "../../actions/session";
import Login from "./login";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);