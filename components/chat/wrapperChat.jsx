import {useRef, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import MessagesChat from "@/components/chat/messagesChat.jsx";
import FormChat from "@/components/chat/formChat";
import {setPopup} from "@/state/popupSlice.js";

const WrapperChat = () => {

    const dispatch = useDispatch()
    const {t} = useTranslation()

    const wrapperChat = useRef(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 84) {
                wrapperChat.current?.classList.add('chat--fixed');
            } else {
                wrapperChat.current?.classList.remove('chat--fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="main__right chat" ref={wrapperChat}>
            <div className="chat__top">
                <p className="chat__title">{t('ОНЛАЙН ЧАТ')}</p>
                <a href="#"
                   onClick={() => dispatch(setPopup('chatRules'))}
                   data-izimodal-open="#chatRules"
                   data-izimodal-transitionin="fadeInDown"
                   className="chat__rules">{t('Правила чата')}</a>
                <div onClick={() => setToggle(!toggle)} className="chat__close"></div>
            </div>

            <div className="chat__body"
                 style={{height: 'calc(100% - 113px)'}}
            >
                <MessagesChat />

                <FormChat/>

            </div>

        </div>
    )
}

export default WrapperChat