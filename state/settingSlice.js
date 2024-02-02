import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    theme: 'light',
    themeCss: '/css/globals.css'
};

const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            state.themeCss = state.theme === 'dark' ? '/css/dark-globals.css' : '/css/globals.css'
        }
    }
})

export default slice.reducer

export const {setTheme} = slice.actions
export const selectTheme = (state) => state.settings.theme;
export const selectThemeCss = (state) => state.settings.themeCss;