import React from "react";
import {useEffect, useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectMessages, messagesList} from "@/state/messagesSlice.js";


const MessagesChat = React.memo(() => {

    const dispatch = useDispatch()
    const refChat = useRef(null)

    useEffect(() => {
        dispatch(messagesList())
    }, [dispatch]);


    const messages = useSelector(selectMessages)

    if(refChat.current) {
        setTimeout(() => {
            refChat.current.scrollTop = refChat.current.scrollHeight;
        }, 0)
    }



    return (
        <div className="chat__body-wrap nano">
            <div className="nano-content" ref={refChat}>
                {messages?.map((message, key) => (
                    <div className="chat__message message" key={key}>
                        <div className="message__top">
                            <div className="message__ava">
                                <img src="" alt="avatar"/>
                                <span className="message__value">10</span>
                            </div>
                            <p className="message__name message__name--icon">
                                <i className="ic-youtube"></i> Vlad</p>
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

MessagesChat.displayName = 'MessagesChat';

export default MessagesChat;