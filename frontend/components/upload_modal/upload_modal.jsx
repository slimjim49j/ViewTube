import React, { Component } from 'react'

class UploadModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: "video",
            description: "",
            video: "",
        };
    }

    handleClose() {
        this.props.receiveUploadModalStatus(false);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
        });
    }
    
    handleFile(e) {
        this.setState({
            video: e.currentTarget.files[0],
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("video[title]", this.state.title);
        formData.append("video[description]", this.state.description);
        formData.append("video[video]", this.state.video);
        this.props.createNewVideo(formData)
            .then
    }

    render() {
        return (
            this.props.show ? (
                <div className="upload-modal-wrapper">
                    <div className="upload-modal">

                        <div className="upload-modal-header">
                            <h3>Upload video</h3>
                            <button onClick={this.handleClose}>
                                <svg viewBox="0 0 24 24" >
                                    <g>
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" >
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Title" onChange={this.handleInput("title")} />
                            <textarea name="" id="" cols="15" rows="5" placeholder="Description" onChange={this.handleInput("description")}></textarea>
                            <input type="file" name="" id="" onChange={this.handleFile} />
                            <input type="submit" value="Save"/>
                        </form>
                    </div>

                </div>
            ) : null
        )
    }
}

export default UploadModal;