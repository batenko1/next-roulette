import io from 'socket.io-client';
import { insertMessage } from "@/state/messagesSlice.js";

export const socket = io('http://localhost:3000');

export const setupSocketListeners = () => (dispatch) => {

    socket.on('dataUpdated', (data) => {

        if (data.sender !== socket.id) {
            dispatch(insertMessage({
                createdDocument: data
            }));
        }
    });

};

