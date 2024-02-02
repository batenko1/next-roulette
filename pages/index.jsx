import {useDispatch} from "react-redux";
import Image from "next/image";
import GooglePlay from '../public/images/google-play.png'
import Avatar from '../public/images/winner.png'
import GameCircle from '../public/images/new-game-circle.png'
import TimeOutCircle from '../public/images/time-out-circle.png'


import Balance from "@/components/sidebar/balance.jsx";
import Help from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";
import {setPopup} from "@/state/popupSlice.js";

export default function Home() {

    const dispatch = useDispatch()

    return (
        <>
            <div className="main__left">
                <div className="rooms">
                    <p className="rooms__title">Выбор комнаты:</p>
                    <ul className="rooms__wrap">
                        <li className="rooms__link rooms__link--active"
                            data-game-id="1">CLASSIC
                        </li>
                        <li className="rooms__link"
                            data-game-id="2">SMALL
                        </li>
                    </ul>
                    <div id="roomClassic" className="rooms__box rooms__box--active">
                        <p className="rooms__text">Минимальный размер ставки игрока от 300 coins</p>
                    </div>
                    <div id="roomSmall" className="rooms__box rooms__box--">
                        <p className="rooms__text">Максимальный размер ставки игрока до 300 coins</p>
                    </div>
                </div>

                <div className="bank">
                    <div className="bank__info">
                        <p className="bank__title">Банк:</p>
                        <p className="bank__players">0 игроков</p>
                    </div>
                    <div className="bank__body">
                        <div className="bank__circle">
                            <div className="bank__circle-inside">

                                <p className="bank__value">0
                                    <span>COINS</span>
                                </p>
                            </div>
                        </div>
                        <a className="button button--gradient bank__button"
                            onClick={() => dispatch(setPopup('jackpot-bet'))}
                        >СДЕЛАТЬ СТАВКУ</a>
                    </div>
                </div>

                <Balance/>

                <Help/>

                <Notification/>

                <Copyright/>


                <div className="application">
                    <p className="application__title">Мобильное приложение</p>
                    <a href="#" className="application__link">
                        <Image src={GooglePlay} height="54" alt="test"></Image>
                    </a>
                </div>

            </div>

            <div className="main__center main__center--full">
                <div className="rooms mobile-show">
                    <p className="rooms__title">Выбор комнаты:</p>
                    <ul className="rooms__wrap">
                        <li className="rooms__link rooms__link--active"
                            data-game-id="1">CLASSIC
                        </li>
                        <li className="rooms__link"
                            data-game-id="2">SMALL
                        </li>
                    </ul>
                    <div id="roomClassic" className="rooms__box rooms__box--active">
                        <p className="rooms__text">Минимальный размер ставки игрока от 300 coins</p>
                    </div>
                    <div id="roomSmall" className="rooms__box">
                        <p className="rooms__text">Максимальный размер ставки игрока до 300 coins</p>
                    </div>
                </div>


                <div className="bank mobile-show">
                    <div className="bank__info">
                        <p className="bank__title">Банк:</p>
                        <p className="bank__players"> 0
                            игроков</p>
                    </div>
                    <div className="bank__body">
                        <div className="bank__circle">
                            <div className="bank__circle-inside">
                                <p className="bank__value">100
                                    <span>COINS</span>
                                </p>
                            </div>
                        </div>
                        <a className="button button--gradient bank__button" data-izimodal-open="#betModal"
                           data-izimodal-transitionin="fadeInDown">СДЕЛАТЬ СТАВКУ</a>
                    </div>
                </div>


                <div className="wrap-first-step">
                    <div className="winners">
                        <a href="#" className="winners__game">#1</a>
                        <h5 className="winners__title">Игроки</h5>
                        <div className="winners__slider">

                            <h1 className="winners__title modal-hint__text"
                                style={{fontSize: "30px", padding: "50px", paddingLeft: "80px"}}>Ждем участников игры
                                !!!</h1>
                        </div>
                    </div>

                    <div
                        className="jackpot-timer">
                        <div className="jackpot-timer__wrap">
                            <div className="jackpot-timer__left">
                                <span></span>
                            </div>
                            <div className="jackpot-timer__center">
                                <p className="jackpot-timer__title">До начала</p>

                                <p id="jackpotTimer" className="jackpot-timer__time">
                                    00:00</p>
                            </div>
                            <div className="jackpot-timer__right">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="choose-winner ">
                    <a href="#" className="choose-winner__game">Classic #1</a>
                    <h5 className="choose-winner__title">ВЫБИРАЕМ ПОБЕДИТЕЛЯ</h5>
                    <div className="wrap-choose-winner-slider">
                        <div className="choose-winner__slider"></div>
                    </div>
                    <div className="choose-winner__point">
                        <i className="ic-roulette-arrow"></i>
                    </div>
                </div>


                <div className="winner winner-step-3 ">
                    <h5 className="winner__title">ПОБЕДИТЕЛЬ</h5>
                    <div className="winner__wrap">
                        <div className="winner__left winner-circle">
                            <p className="winner-circle__text">ШАНС ВЫИГРЫША</p>
                            <span
                                className="winner-circle__numbers winner-percent">10%</span>
                        </div>
                        <div className="winner__center">
                            <div className="winner__center-top">
                                <div className="winner__avatar">
                                    <Image src={Avatar} height="94" width="94" alt="site"></Image>
                                    {/*<img src="" alt="avatar"/>*/}
                                </div>
                                <div className="winner__box">
                                    <p className="winner__name">Vlad</p>
                                    <p className="winner__value">1000<span>COINS</span>
                                    </p>
                                </div>
                            </div>
                            <p className="winner__hash">Round number: <a target="_blank"
                                                                         href="#">hash</a>
                            </p>
                        </div>
                        <div className="winner__right winner-circle">
                            <p className="winner-circle__text">СЧАСЛИВЫЙ БИЛЕТ</p>
                            <span className="winner-circle__numbers winner-number"><i
                                className="ic-dollar"></i> 12</span>
                        </div>
                    </div>
                </div>


                <div className="jackpot-history">
                    <div
                        className="jackpot-history-bottom message-start-game">
                        <div className="jackpot-history-bottom__left">
                            <Image src={GameCircle} className="jackpot-history__img" alt="site"></Image>
                            <div className="jackpot-history__wrap">
                                <p className="jackpot-history__title">Игра началась, делайте ваши депозиты</p>
                                <p className="jackpot-history__hash">Хэш раунда Sha224 <a
                                    href="#"
                                    target="blank">Test</a>
                                </p>
                            </div>
                        </div>
                        <div className="jackpot-history-bottom__right ">
                            <a data-izimodal-open="#betModal" data-izimodal-transitionin="fadeInDown"
                               className="jackpot-history__button">СДЕЛАТЬ СТАВКУ</a>
                        </div>
                    </div>
                    <div className="jackpot-history__wrapper nano">
                        <div className="nano-content">
                            <div className="jackpot-history-top">
                                <Image src={TimeOutCircle} className="jackpot-history__img" alt="site"></Image>
                                <div className="jackpot-history__wrap">
                                    <p className="jackpot-history__title">ВРЕМЯ СТАВОК ИСТЕКЛО</p>
                                    <p className="jackpot-history__hint">Игра уже начинается!</p>
                                </div>
                            </div>
                            <ul className="jackpot-history__list">

                                <li className="jackpot-history__item history-item history-item--1">
                                    <div className="history-item__left">
                                        <Image src={Avatar} width="48" className="history-item__avatar"
                                               alt="site"></Image>
                                        <div className="history-item__wrap">
                                            <p className="history-item__name">Vlad</p>
                                        </div>
                                    </div>
                                    <div className="history-item__right">
                                        <p className="history-item__value">100 &nbsp;
                                            <span>COINS</span></p>
                                        <p className="history-item__range"><i className="ic-game-history"></i>0
                                            - 100</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}