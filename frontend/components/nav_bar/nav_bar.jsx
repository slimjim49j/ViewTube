import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
    // modify to just sign in
    const display = currentUser ? (
        <div>
            <p>hello, {currentUser.firstName}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );

    return (
        <header>
            <h1>header</h1>
            <div>
                {display}
            </div>
        </header>
    )
}