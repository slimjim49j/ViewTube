import Comments from "./comments";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    commentsLength: Object.keys(state.entities.comments).length
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
