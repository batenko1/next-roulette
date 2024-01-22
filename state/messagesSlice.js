import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import io from 'socket.io-client';
import {socket} from "@/utils/sockets.js";


const initialState = {
    messages: []
};

export const messagesList = createAsyncThunk(
    'messages/list',
    async () => {
        try {
            const response = await fetch('/api/messages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            return data;
        }
        catch (error) {
            throw new Error(`Error sending message: ${error.message}`);
        }
    }
)

export const sendMessage = createAsyncThunk(
    'messages/sendMessage',
    async (message, thunkAPI) => {
        try {
            const response = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            const data = await response.json();


            if (!response.ok) {
                throw new Error(data.error);
            }

            return data;
        } catch (error) {
            throw new Error(`Error sending message: ${error.message}`);
        }
    }
);

const slice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        insertMessage: (state, action) => {
            state.messages.push(action.payload.createdDocument)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {

            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                socket.emit('dataUpdated', action.payload.createdDocument);
                state.messages.push(action.payload.createdDocument)
            })
            .addCase(sendMessage.rejected, (state, action) => {

            })
            .addCase(messagesList.pending, (state) => {

            })
            .addCase(messagesList.fulfilled, (state, action) => {
                state.messages = action.payload.data
            })
            .addCase(messagesList.rejected, (state, action) => {

            })

    },
})

export default slice.reducer

export const selectMessages = (state) => state.messages.messages;

export const {insertMessage} = slice.actions
