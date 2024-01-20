import {useState} from "react";
import {useDispatch} from "react-redux";
import {sendMessage} from "@/state/messagesSlice.js";

export default function FormChat() {


    const dispatch = useDispatch()

    const [message, setMessage] = useState('')


    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {

        dispatch(sendMessage({
            text: message
        }))

        setMessage('')

    }

    return (
        <div className="chat__bottom">

            <div className="chat__bottom-wrap">
                <div className="chat-form">
                    <input type="text" className="chat-form__inp"
                           value={message} onChange={handleInputChange}
                           placeholder="Введите сообщение"/>
                    <button className="chat-form__btn" onClick={handleSendMessage}>
                        <i className="ic-chat"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}