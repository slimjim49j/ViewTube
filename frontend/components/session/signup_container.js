import { connect } from "react-redux";
import {
    createNewUser,
    receiveSessionErrors
} from "../../actions/session";
import Signup from "./signup";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);