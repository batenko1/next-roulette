import {createSlice} from "@reduxjs/toolkit";


const initialState = {
   popupName: null,
};

const slice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            state.popupName = action.payload
        }
    }
})

export default slice.reducer

export const {setPopup} = slice.actions
export const selectPopup = (state) => state.popup.popupName;