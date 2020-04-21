import React from "react";
import { Link } from "react-router-dom";

import SearchBarContainer from "./search_bar_container";


export default ({ currentUser, logout, receiveModalStatus }) => {
    const rightNav = currentUser ? (
        <div className="right-nav">
            {/* upload modal */}
            <button className="nav-btn" onClick={() => receiveModalStatus(true)}>
                <svg viewBox="0 0 24 24">
                    <g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
                </svg>
            </button>

            {/* logout */}
            <button className="logout-btn" onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div className="right-nav">
            <Link className="login-btn" to="/login">
                <svg viewBox="0 0 24 24" focusable="false"> 
                    <g><path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z">
                    </path></g>
                </svg>
                <span>LOGIN</span>
            </Link>
        </div>
    );
    
    return (
        <header>
            <div className="left-nav">
                <div className="nav-btn">
                    <svg viewBox="0 0 24 24" >
                        <g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
                    </svg>
                </div>
                <Link id="logo" to="/">
                    <svg viewBox="0 0 68 60"><g viewBox="0 0 50 60" >
                        <g>
                            <path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
                c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
                C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
                S64.31,19.77,63,14.87z"></path>
                            <polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57" ></polygon>
                        </g>
                    </g>
                    </svg>
                    <h2>ViewTube</h2>

                </Link>
            </div>
            <SearchBarContainer />
            {rightNav}
        </header>
    )
}

/* hamburger svg:

*/

