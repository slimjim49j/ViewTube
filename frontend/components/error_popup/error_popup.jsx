import React, { Component } from 'react'

class ErrorPopup extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const status = this.props.errorPopupStatus;
        if (status) {
            setTimeout(() => (this.props.receiveErrorPopupStatus(false)), 7000);
        }
    }
    
    render() {
        const errorPopupStatus = this.props.errorPopupStatus;
        return errorPopupStatus ? (
            <div className="error-popup-container">
                
                <p>
                    <svg fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                Please login to perform that action
                </p>
            </div>
        ) : (
            <div></div>
        )
    }
}

export default ErrorPopup;