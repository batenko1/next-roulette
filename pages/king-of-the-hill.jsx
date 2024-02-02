import Image from "next/image";
import Balance from "@/components/sidebar/balance.jsx";
import Help from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";

import Fox from '../public/images/fox.png'

const KingOfTheHill = () => {
    return (

        <>
            <div class="main__left">

                <Balance/>

                <Help/>

               <Notification/>

                <Copyright/>

            </div>

            <div class="main__center main__center--king ">

                <div class="main__center--king-wrap nano">
                    <div class="nano-content">

                        <div class="game game-classic">
                            <div class="game__left">
                                <p class="game__title">Classic
                                    #1</p>
                                <ul class="game__participants game__participants_classic">

                                </ul>
                            </div>
                            <div class="game__center">
                                <div class="game__winner">

                                    <Image src={Fox} alt="winner" className="game__winner-img"/>

                                </div>
                            </div>
                            <div class="game__bank game__bank--mobile">
                                <p class="game__bank-title">В БАНКЕ:</p>
                                <span
                                    class="game__bank-value">0</span>
                                <span class="game__bank-text">COINS</span>
                            </div>
                            <div class="game__right">
                                <div class="game__bank">
                                    <p class="game__bank-title">В БАНКЕ:</p>
                                    <span
                                        class="game__bank-value">0</span>
                                    <span class="game__bank-text">COINS</span>
                                </div>
                                <div class="game__time">
                                    <p class="game__time-text classic-timer">Осталось:
                                        <span class="game__time-value">00:
                                        <span
                                            class="game__time-counter">0</span></span>
                                    </p>

                                    <a className="game__time-link button button--gradient" id="bedBet"
                                       data-izimodal-open="#auth" data-izimodal-transitionin="fadeInDown">ВНЕСТИ
                                        <span>10</span> COINS</a>

                                </div>
                            </div>
                        </div>
                        <div class="game game-senyor">
                            <div class="game__left">
                                <p class="game__title">Senyor #1</p>
                                <ul class="game__participants game__participants_senyor">

                                </ul>
                            </div>
                            <div class="game__center">
                                <div class="game__winner">
                                    <Image src={Fox} alt="winner" className="game__winner-img"/>

                                </div>
                            </div>
                            <div class="game__bank game__bank--mobile">
                                <p class="game__bank-title">В БАНКЕ:</p>
                                <span
                                    class="game__bank-value">0</span>
                                <span class="game__bank-text">COINS</span>
                            </div>
                            <div class="game__right">
                                <div class="game__bank">
                                    <p class="game__bank-title">В БАНКЕ:</p>
                                    <span
                                        class="game__bank-value">0</span>
                                    <span class="game__bank-text">COINS</span>
                                </div>
                                <div class="game__time">
                                    <p class="game__time-text senyor-timer">Осталось:
                                        <span class="game__time-value">00:
                                    <span
                                        class="game__time-counter">20</span></span>
                                    </p>

                                    <a className="game__time-link button button--gradient" data-izimodal-open="#auth"
                                       data-izimodal-transitionin="fadeInDown"
                                       id="goodBet">Внести <span>10</span> COINS</a>

                                </div>
                            </div>
                        </div>
                        <ul class="game-history">

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default KingOfTheHill