import { connect } from 'react-redux';
import SearchResults from "./search_results";
import { fetchAllVideos } from "../../actions/videos";
import { receiveSearchBarStatus } from "../../actions/ui";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        videos: state.entities.videos,
        search: new URLSearchParams(ownProps.location.search).get("search") || "",
        searchBarStatus: state.ui.searchBar,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllVideos: search => dispatch(fetchAllVideos(search)),
        receiveSearchBarStatus: status => dispatch(receiveSearchBarStatus(status)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
