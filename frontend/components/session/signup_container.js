import { connect } from "react-redux";
import {
    createNewUser,
    receiveSessionErrors
} from "../../actions/session";
import Signup from "./signup";
import { createChannel } from "../../actions/channels";

const mapStateToProps = (state, ownProps) => {

    return {
        errors: state.errors.session,
        destination: new URLSearchParams(ownProps.location.search).get("destination") || "",
    }
}

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
    createChannel: channel => dispatch(createChannel(channel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);