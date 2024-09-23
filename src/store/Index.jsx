import { configureStore } from "@reduxjs/toolkit";

import  userSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});


export default store

// Redux Toolkit: Simplifies the setup and management of Redux state.
// Store Configuration: Combines slices into a single Redux store.
// Slices: Encapsulate reducer logic and actions for a specific part of the state.
// Logging Actions: Helps in debugging by showing available actions.
// Exporting Store: Makes the store available for use in your application. 