import {configureStore} from "@reduxjs/toolkit";
import settings from "./settingSlice";
import messages from "./messagesSlice";
import popup from "./popupSlice";
import user from "./userSlice"

const store = configureStore({
    reducer: {
        settings,
        messages,
        popup,
        user
    }
})

export default store