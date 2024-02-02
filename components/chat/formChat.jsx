import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "@/state/messagesSlice.js";
import {selectUser} from "@/state/userSlice.js";

export default function FormChat() {

    const user = useSelector(selectUser)

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

            {!user ?
                (
                    <>
                        <div className="chat__bottom-wrap">
                            <p className="chat__bottom-text">Для общения в чате внесите депозит не менее 3000 coins</p>
                            <i className="ic-deposit-warning"></i>
                        </div>
                        <div className="chat__bottom-wrap">

                            <a className="button chat__bottom-button" data-izimodal-open="#inputModal"
                               data-izimodal-transitionin="fadeInDown">ПОПОЛНИТЬ</a>

                            <a className="button chat__bottom-button" data-izimodal-open="#auth"
                               data-izimodal-transitionin="fadeInDown">ПОПОЛНИТЬ</a>

                        </div>
                    </>


                )
                :
                (
                    <>
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
                    </>
                )
            }


        </div>
    )
}