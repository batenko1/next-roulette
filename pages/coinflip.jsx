import Balance from "@/components/sidebar/balance.jsx";
import Help from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";
const CoinFlip = () => {
    return (
        <>
            <div className="main__left">


                <div className="create-game">
                    <div className="create-game__info">
                        <p className="create-game__title">Новая игра:</p>
                    </div>
                    <div className="create-game__body">


                        <a href="#" data-izimodal-open="#createGame"
                           data-izimodal-transitionin="fadeInDown" className="create-game__button">
                            <span>+</span><br/>
                            Создать<br/> игру
                        </a>

                    </div>
                </div>

                <Balance/>

                <Help/>

                <Notification/>

                <Copyright/>

            </div>
            <div className="main__center main__center--king">



                <div className="create-game mobile-show">
                    <div className="create-game__info">
                        <p className="create-game__title">Новая игра:</p>
                    </div>
                    <div className="create-game__body">

                        <a href="#" data-izimodal-open="#createGame"
                           data-izimodal-transitionin="fadeInDown" className="create-game__button">
                            <span>+</span><br/>
                            Создать<br/> игру
                        </a>

                    </div>
                </div>

                <div className="main__center--king-wrap nano">
                    <div className="nano-content">


                        <div className="coin-history">
                            <div className="coin-history__left">
                                <h4 className="coin-history__title">Ежедневная статистика</h4>
                                <div className="coin-history-box">
                                    <div className="coin-history-box__col">
                                        <p className="coin-history-box__value coin-history-box__value--orange">0
                                            <span>COINS</span></p>
                                        <p className="coin-history-box__text">Общая сумма</p>
                                    </div>
                                    <div className="coin-history-box__col coin-history-box__col--center">
                                        <p className="coin-history-box__value">10</p>
                                        <p className="coin-history-box__text">Всего игр</p>
                                    </div>
                                    <div className="coin-history-box__col coin-history-box__col--last">
                                        <p className="coin-history-box__value">20</p>
                                        <p className="coin-history-box__text">Игр в ожидании</p>
                                    </div>
                                </div>
                            </div>
                            <div className="coin-history__right">

                                <h4 className="coin-history__title">ВАШИ ИГРЫ</h4>
                                <div className="coin-history-box">
                                    <div className="coin-history-box__col">
                                        <i className="ic-user"></i>
                                        <p className="coin-history-box__text">Есть ставки</p>
                                    </div>
                                    <div className="coin-history-box__col coin-history-box__col--center">
                                        <p className="coin-history-box__value">10</p>
                                        <p className="coin-history-box__text">Создано игр</p>
                                    </div>
                                    <div className="coin-history-box__col coin-history-box__col--last">
                                        <p className="coin-history-box__value coin-history-box__value--orange">10
                                            <span>COINS</span></p>
                                        <p className="coin-history-box__text">Сумма выигрышей</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <ul className="coin-hint">
                            <li className="coin-hint__text">Игрок</li>
                            <li className="coin-hint__text">Ставка</li>
                            <li className="coin-hint__text">Наблюдение</li>
                            <li className="coin-hint__text">Ставка</li>
                            <li className="coin-hint__text">Игрок</li>
                        </ul>


                        <div className="wrap-coinflip">


                        </div>



                    </div>
                </div>

                <div className="help mobile-show">
                    <p className="help__title">Помощь</p>
                    <a className="help__link" data-izimodal-open="#helpModal" data-izimodal-transitionin="fadeInDown">
                        <i className="ic-rules"></i>
                        Правила игры
                    </a>
                </div>


                <div className="coin-history mobile-show">
                    <div className="coin-history__left">
                        <h4 className="coin-history__title">Ежедневная статистика</h4>
                        <div className="coin-history-box">
                            <div className="coin-history-box__col">
                                <p className="coin-history-box__value coin-history-box__value--orange">4, 127 <span>COINS</span>
                                </p>
                                <p className="coin-history-box__text">Общая сумма</p>
                            </div>
                            <div className="coin-history-box__col coin-history-box__col--center">
                                <p className="coin-history-box__value">325</p>
                                <p className="coin-history-box__text">Всего игр</p>
                            </div>
                            <div className="coin-history-box__col coin-history-box__col--last">
                                <p className="coin-history-box__value">73</p>
                                <p className="coin-history-box__text">Игр в ожидании</p>
                            </div>
                        </div>
                    </div>
                    <div className="coin-history__right">
                        <h4 className="coin-history__title">ВАШИ ИГРЫ</h4>
                        <div className="coin-history-box">
                            <div className="coin-history-box__col">
                                <i className="ic-user"></i>
                                <p className="coin-history-box__text">Есть ставки</p>
                            </div>
                            <div className="coin-history-box__col coin-history-box__col--center">
                                <p className="coin-history-box__value">25</p>
                                <p className="coin-history-box__text">Создано игр</p>
                            </div>
                            <div className="coin-history-box__col coin-history-box__col--last">
                                <p className="coin-history-box__value coin-history-box__value--orange">1, 027 <span>COINS</span>
                                </p>
                                <p className="coin-history-box__text">Сумма выигрышей</p>
                            </div>
                        </div>
                    </div>
                </div>


                <ul className="hide">
                    <li>
                        <a data-izimodal-open="#createGame" data-izimodal-transitionin="fadeInDown">Окно 1. Создание
                            игры</a>
                    </li>
                    <li className="hide">
                        <a data-izimodal-open="#waitPlayer" data-izimodal-transitionin="fadeInDown">Окно 2, ожидание второго
                            игрока или зрителя</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer2" data-izimodal-transitionin="fadeInDown">Окно 3 , когда
                            присоединился второй игрок</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer3" data-izimodal-transitionin="fadeInDown">Окно 4 ,добавляем
                            следующий глаз</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer4" data-izimodal-transitionin="fadeInDown">Окно 5 , игра
                            началась</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer5" data-izimodal-transitionin="fadeInDown">Окно 6. Выигрыш</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer6" data-izimodal-transitionin="fadeInDown">Окно 6. Выигрыш от
                            первого игрока</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer7" data-izimodal-transitionin="fadeInDown">Окно 6. Выигрыш от
                            второго игрока</a>
                    </li>
                    <li>
                        <a data-izimodal-open="#waitPlayer8" data-izimodal-transitionin="fadeInDown">Окно 6 Окно для
                            третьего лица</a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default CoinFlip