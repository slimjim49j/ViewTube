import { connect } from "react-redux";
import Home from "./home";
import { fetchAllVideos } from "../../actions/videos";

const mapStateToProps = state => ({
    videos: state.entities.videos,
    channels: state.entities.channels,
});

const mapDispatchToProps = dispatch => ({
    fetchAllVideos: search => dispatch(fetchAllVideos(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);