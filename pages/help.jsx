import Balance from "@/components/sidebar/balance.jsx";
import HelpSidebar from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";

const Help = () => {
    return (
        <main className="main">
            <div className="main__left">

                <Balance/>


                <HelpSidebar/>

                <Notification/>

                <Copyright/>


            </div>
            <div className="main__center main__center--full">
                <div className="starting">
                    <h2 className="starting__title">РАЗДЕЛ ПОМОЩИ</h2>
                    <p className="starting__text">Мы постораемся помочь вам с проблемами, но сперва
                        посмотрите уже готовые решения ниже..</p>
                </div>
                <div className="padding-wrap">

                    <div className="answers">
                        <div className="answer">
                            <div className="answer__top">
                                <h6 className="answer__title">Не могу авторизоваться на сайте через Вк</h6>
                                <span className="answer__arrow"></span>
                            </div>
                            <div className="answer__body">
                                <p className="answer__text">
                                    Для того чтобы получать ежедневный бонус вы должны достигнуть 3 уровня рефералов.
                                    Так же если вы пополните свой баланс суммой не менее 300 руб., вам бцудет доступен
                                    этот бонус и чат сайта..
                                </p>
                            </div>
                        </div>

                        <div className="answer">
                            <div className="answer__top">
                                <h6 className="answer__title">Не могу авторизоваться на сайте через Вк</h6>
                                <span className="answer__arrow"></span>
                            </div>
                            <div className="answer__body">
                                <p className="answer__text">
                                    Для того чтобы получать ежедневный бонус вы должны достигнуть 3 уровня рефералов.
                                    Так же если вы пополните свой баланс суммой не менее 300 руб., вам бцудет доступен
                                    этот бонус и чат сайта..
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </main>
    )
}

export default Help