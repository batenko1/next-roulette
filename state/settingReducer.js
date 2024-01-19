import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    theme: null
};

const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export default slice.reducer

export const {setTheme} = slice.actions