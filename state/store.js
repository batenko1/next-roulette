import {configureStore} from "@reduxjs/toolkit";
import settings from "./settingSlice";
import messages from "./messagesSlice";


const store = configureStore({
    reducer: {
        settings,
        messages
    }
})

export default store