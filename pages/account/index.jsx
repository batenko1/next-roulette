
import Balance from "@/components/sidebar/balance.jsx";
import Help from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";


const Index = () => {

    return (
        <main className="main">
            <div className="main__left">

                <div className="profile">
                    <div className="profile__avatar">
                        <img src="" alt="avatar"/>
                    </div>
                    <p className="profile__name">User name</p>
                </div>

                <Balance/>

                <Help/>

                <Notification/>

                <Copyright/>

            </div>
            <div className="main__center main__center--king">

                <div className="profile mobile-show">
                    <div className="profile__avatar">
                        <img src="" alt="avatar"/>
                    </div>
                    <p className="profile__name">User name</p>
                </div>

                <div className="referral">
                    <h4 className="referral__title">РЕФЕРАЛЬНАЯ СИСТЕМА</h4>
                    <div className="referral__wrap">
                        <div className="referral__left">


                            <div className="ref-level">
                                <div className="ref-level__top">
                                    <p className="ref-level__level">1LEVEL.</p>
                                    <p className="ref-level__exp">100 / <span>1000 EXP.</span></p>
                                </div>
                                <div className="ref-level__timeline">
                                    <span></span>
                                </div>
                                <p className="ref-level__text">1 уровень = 200 руб.</p>
                            </div>

                            <div className="ref-value">
                                <p className="ref-value__text">Кол-во ваших <br/>
                                    рефералов:</p>
                                <a className="ref-value__link" data-izimodal-open="#referralTable"
                                   data-izimodal-transitionin="fadeInDown">0</a>
                            </div>

                        </div>
                        <div className="referral__right ref-link">
                            <form className="ref-link__promo">
                                <input type="text" name="promo" className="ref-link__promo-field"
                                       placeholder="Введите промокод"/>
                                    <a id="promoActive"
                                       className="button ref-link__promo-button">Активировать</a>
                            </form>
                            <p className="ref-link__title">Получайте бонусы с рефералов!</p>
                            <div className="ref-link__wrap">

                                <p className="ref-link__percent">0%</p>
                                <p className="ref-link__text">С каждого приведенного
                                    игрока на наш сервис</p>
                            </div>
                            <a id="showNotify"
                               className="ref-link__link">Link</a>
                            <input type="text" id="showNotifyInput" className="ref-link__link--hidden"
                                   value=""/>
                                <p className="ref-link__stock">Делитесь ссылкой с друзьями и получайте реферальные
                                    начисления!</p>
                        </div>
                    </div>
                </div>

                <div id="history" className="history">
                    <div className="history__top">
                        <ul className="history__links">
                            <li className="history__link history__link--active">ИСТОРИЯ БАЛАНСА</li>
                            <li className="history__link">/ ИСТОРИЯ ИГР</li>
                        </ul>

                        <a className="history__help" data-izimodal-open="#outputRules"
                           data-izimodal-transitionin="fadeInDown"><i className="ic-rules"></i>Правила вывода</a>
                    </div>
                    <div id="historyBodyOne" className="history__body history__body--active nano">
                        <div className="nano-content">
                            <ul className="history__list">

                                <li className="history__item hist-balance hist-balance--green">
                                    <div className="hist-balance__left">
                                        <p className="hist-balance__sum"><i
                                            className="ic-money-green"></i>0 Руб.</p>
                                    </div>
                                    <div className="hist-balance__right">
                                        <p className="hist-balance__source">Stripe</p>

                                        <p className="hist-balance__data">Date</p>
                                    </div>
                                </li>



                                <li className="history__item hist-balance hist-balance--red">
                                    <div className="hist-balance__left">
                                        <p className="hist-balance__sum"><i
                                            className="ic-money-red"></i>0 Руб.</p>
                                    </div>
                                    <div className="hist-balance__right">
                                        <p className="hist-balance__source">0</p>
                                        <p className="hist-balance__data">Date</p>
                                    </div>
                                </li>


                                <li className="history__item hist-balance hist-balance--yellow">
                                    <div className="hist-balance__left">
                                        <p className="hist-balance__sum"><i
                                            className="ic-money-yellow"></i>0 Руб.</p>
                                    </div>
                                    <div className="hist-balance__right">
                                        <p className="hist-balance__source--user"><i
                                            className="ic-user-black"></i> Игрок <span>User name</span> пополнил
                                            баланс</p>
                                        <p className="hist-balance__data">Date</p>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div id="historyBodyTwo" className="history__body nano">

                        <div className="nano-content">
                            <ul className="history__list">

                                <li className="history__item hist-balance hist-balance--yellow">
                                    <div className="hist-balance__left">
                                        <p className="hist-balance__sum"><i
                                            className="ic-money-yellow"></i>0 Руб.</p>
                                    </div>
                                    <div className="hist-balance__right">


                                        <p className="hist-balance__source--user"><i
                                            className="ic-user-black"></i> Игрок <span>0</span> пополнил
                                            баланс</p>
                                        <p className="hist-balance__data">Date</p>
                                    </div>
                                </li>

                                <li className="history__item hist-balance hist-balance--game hist-balance--green">
                                    <div className="hist-balance__left">

                                        <p className="hist-balance__sum"><i className="ic-money-green"></i>0 coins</p>
                                        <p className="hist-balance__game">Game name</p>
                                    </div>
                                    <div className="hist-balance__right">
                                        <p className="hist-balance__data">Date</p>
                                    </div>
                                </li>

                                <li className="history__item hist-balance hist-balance--game hist-balance--red">
                                    <div className="hist-balance__left">

                                        <p className="hist-balance__sum"><i
                                            className="ic-money-red"></i>0 coins</p>
                                        <p className="hist-balance__game">0</p>
                                    </div>
                                    <div className="hist-balance__right">
                                        <p className="hist-balance__data">0</p>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Index