import React from "react";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectMessages, messagesList} from "@/state/messagesSlice.js";


const MessagesChat = React.memo(() => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(messagesList())
    }, [dispatch]);


    const messages = useSelector(selectMessages)

    return (
        <div className="chat__body-wrap nano">
            <div className="nano-content">
                {messages.map((message, key) => (
                    <div className="chat__message message" key={key}>
                        <div className="message__top">
                            <div className="message__ava">
                                <img src="" alt="avatar"/>
                                <span className="message__value">10</span>
                            </div>
                            <p className="message__name message__name--icon">
                                <i className="@if($message->account->role_id == 4) ic-youtube @endif"></i> Vlad</p>
                            <span className="message__time">14.30</span>
                        </div>
                        <div className="message__body">
                            <p className="message__text">{message.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
})

export default MessagesChat;