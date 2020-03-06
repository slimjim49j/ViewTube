import React from "react";
import { connect } from "react-redux";

import NavBar from "./nav_bar";
import { logout } from "../../actions/session";
import { receiveUploadModalStatus } from "../../actions/ui"

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveModalStatus: status => dispatch(receiveUploadModalStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);