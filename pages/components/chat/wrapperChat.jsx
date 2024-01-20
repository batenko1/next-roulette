import MessagesChat from "@/pages/components/chat/messagesChat.jsx";
import FormChat from "@/pages/components/chat/formChat";

const WrapperChat = () => {

    return (
        <div className="main__right chat">
            <div className="chat__top">
                <p className="chat__title">ОНЛАЙН ЧАТ</p>
                <a href="#" data-izimodal-open="#chatRules"
                   data-izimodal-transitionin="fadeInDown"
                   className="chat__rules">Правила чата</a>
                <div className="chat__close"></div>
            </div>

            <div className="chat__body" style={{height: 'calc(100% - 113px)'}}>
                <MessagesChat />

                <FormChat/>

            </div>

        </div>
    )
}

export default WrapperChat