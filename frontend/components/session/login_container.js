import { connect } from "react-redux";
import {
    login,
    receiveSessionErrors,
} from "../../actions/session";
import Login from "./login";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        destination: new URLSearchParams(ownProps.location.search).get("destination") || "",
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);