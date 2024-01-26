import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: null,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default slice.reducer

export const {setUser} = slice.actions
export const selectUser = (state) => state.user.user;