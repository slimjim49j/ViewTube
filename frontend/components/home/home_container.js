import { connect } from "react-redux";
import Home from "./home";
import { fetchAllVideos } from "../../actions/videos";

const mapStateToProps = state => ({
    videos: state.entities.videos,
});

const mapDispatchToProps = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);