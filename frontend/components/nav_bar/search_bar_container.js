import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { receiveSearchBarStatus } from "../../actions/ui";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    receiveSearchBarStatus: status => dispatch(receiveSearchBarStatus(status)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));