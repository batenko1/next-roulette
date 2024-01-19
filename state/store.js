import {configureStore} from "@reduxjs/toolkit";
import settings from "./settingReducer";


const store = configureStore({
    reducer: {
        settings:settings
    }
})

export default store