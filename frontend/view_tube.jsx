import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

// import { postUser, postSession, deleteSession } from "./utils/session"; //testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    //bootstrapping/preloadedstate
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                },
            },
            session: {
                id: window.currentUser.id
            }
        }
    }
    
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store} />, root);

    //testing
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    
    // window.postUser = postUser
    // window.postSession = postSession
    // window.deleteSession = deleteSession
})