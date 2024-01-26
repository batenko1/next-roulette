import {useRef, useEffect, useState} from "react";
import MessagesChat from "@/pages/components/chat/messagesChat.jsx";
import FormChat from "@/pages/components/chat/formChat";

const WrapperChat = () => {

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
                <p className="chat__title">ОНЛАЙН ЧАТ</p>
                <a href="#" data-izimodal-open="#chatRules"
                   data-izimodal-transitionin="fadeInDown"
                   className="chat__rules">Правила чата</a>
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