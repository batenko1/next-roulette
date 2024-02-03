import React, {useEffect, useRef, useState} from 'react';
import {useReplenish} from "@/hooks/useReplenish.js";
import {selectUser} from "@/state/userSlice.js";
import {useSelector} from "react-redux";
import '@/public/css/roulette.css'
import calculateTimeDifference from "@/functions/calculateTimeDifference.js";
import startCountdown from "@/functions/startCountDown.js";

const SliderBonus = () => {

    const [accessBonus, setAccessBonus] = useState(false)
    const [timer, setTimer] = useState(null)
    const {replenishBalance} = useReplenish()
    const sliderRef = useRef(null);
    const [items, setItems] = useState([]);
    const [spinning, setSpinning] = useState(false);
    const user = useSelector(selectUser)

    var bet = {
        color: 'default',
        count: 1
    };

    useEffect(() => {
        let bets = [];

        for (var i = 0; i < 1000; i++) {
            var num = Math.floor(Math.random() * (20));

            if (num % 2 === 0) bet = {color: "orange", count: 10};
            if (num % 3 === 0) bet = {color: "green", count: 25};
            if (num % 5 === 0) bet = {color: "lose", count: 50};
            if (num % 10 === 0) bet = {color: "yellow", count: 500};
            if (num % 20 === 0) bet = {color: "blue", count: 1000};

            bets.push(bet)
        }

        setItems(bets)

    }, [])


    useEffect(() => {

        const checkSlideBonus = async () => {
            await fetch('/api/slide-bonus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user}),
            }).then(response => {
                return response.json()
            }).then(({existBonus}) => {

                if(existBonus) {
                    setAccessBonus(true)
                    const {hours, minutes, seconds} = calculateTimeDifference(new Date(existBonus.created_at), new Date())
                    startCountdown(hours, minutes, seconds)

                }

            })
        }

        if (user) checkSlideBonus()
    }, [user])




    const spin = () => {

        if (!spinning) {
            let winnerBet = Math.floor(Math.random() * (1000 - 500) + 500)
            setSpinning(true)

            var rouletteBox = document.querySelector(".bonus__slider");
            var firstBox = rouletteBox.firstElementChild;

            const marginLeft = (winnerBet) * 84 * -1 + (780 - 84) / 2;

            firstBox.style.transition = "margin-left 7s cubic-bezier(0.215, 0.610, 0.355, 1.000)";
            firstBox.style.marginLeft = marginLeft + "px";


            setTimeout(async () => {
                setSpinning(false);
                await replenishBalance(items[winnerBet].count, user, 2)
            }, 7000);

        }

    }


    return (

        <>
            {!accessBonus ? (
                    <>
                        <div className="get-bonus">
                            <div className="get-bonus__body">
                                <a onClick={() => spin()}
                                   className="get-bonus__button">
                                    Получить <br/>
                                    БОНУС
                                </a>
                            </div>
                            <div className="get-bonus__bottom">
                                <p className="get-bonus__info">У вас есть 1 бесплатный спин!</p>
                            </div>
                        </div>
                        <div className="bonus">
                            <div className="bonus__slider" ref={sliderRef}>

                                {items?.map((item, indx) => (
                                    <div className={`bonus__slider-item bonus-item bonus-item--${item.color}`}
                                         data-id={indx}
                                         key={indx}>
                                        <span className="bonus-item__value">{item.count}</span>
                                        <span className="bonus-item__coins">COINS</span>
                                    </div>
                                ))}

                            </div>
                            <div className="bonus__point">
                                <i className="ic-roulette-arrow"></i>
                            </div>
                        </div>
                    </>
            )
            :
                (
                    <>
                        <div className="get-bonus">
                            <div className="get-bonus__body">
                                <p className="disabled-bonus__button">
                                    Получить <br />
                                    БОНУС
                                </p>
                            </div>
                            <div className="get-bonus__bottom">
                                <p className="get-bonus__info"
                                >Следующий бонус будет доступен через: <span id="timerBonus">-</span></p>
                            </div>
                        </div>
                    </>
                )
            }

        </>

    )
}

export default SliderBonus