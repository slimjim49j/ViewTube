import { connect } from "react-redux";

import UploadModal from "./upload_modal";
import { receiveUploadModalStatus } from "../../actions/ui";
import { createNewVideo } from '../../actions/videos'

const mapStateToProps = (state) => ({
    show: state.ui.uploadModal
})

const mapDispatchToProps = dispatch => ({
    receiveUploadModalStatus: status => dispatch(receiveUploadModalStatus(status)),
    createNewVideo: formData => dispatch(createNewVideo(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal)
