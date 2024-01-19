const Chat = () => (
    <div className="main__right chat">
        <div className="chat__top">
            <p className="chat__title">ОНЛАЙН ЧАТ</p>
            <a href="#" data-izimodal-open="#chatRules"
               data-izimodal-transitionin="fadeInDown"
               className="chat__rules">Правила чата</a>
            <div className="chat__close"></div>
        </div>

        <div className="chat__body" style={{height: 'calc(100% - 30px)'}}>
            <div className="chat__body-wrap nano">
                <div className="nano-content">
                    <div className="chat__message message">
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
                            <p className="message__text">Text</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="chat__bottom">

                <div className="chat__bottom-wrap">
                    <div className="chat-form">
                        <input type="text" className="chat-form__inp" placeholder="Введите сообщение"/>
                        <button className="chat-form__btn">
                            <i className="ic-chat"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </div>
)

export default Chat