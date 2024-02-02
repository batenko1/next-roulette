import Balance from "@/components/sidebar/balance.jsx";
import Help from "@/components/sidebar/help.jsx";
import Notification from "@/components/sidebar/notification.jsx";
import Copyright from "@/components/sidebar/copyright.jsx";

import SliderBonus from "@/components/account/daily-bonus/SliderBonus.jsx";

const DailyBonus = () => {
    return (
        <main className="main">
            <div className="main__left">

                <Balance/>

                <Help/>

                <Notification/>

                <Copyright/>

            </div>
            <div className="main__center main__center--full">
                <div className="starting">
                    <h2 className="starting__title">ЕЖЕДНЕВНЫЙ БОНУС</h2>
                    <p className="starting__text">Заходите на сайт каждый день и получайте различные бонусы совершенно
                        бесплатно! У Вас есть шанс выиграть до 1000 coins, не упустите удачу!!!</p>
                </div>
                <div className="padding-wrap">

                    <div className="hint">
                        <span className="hint__icon">!</span>
                        <div className="hint__wrap">
                            <p className="hint__title">Внимание!</p>
                            <p className="hint__text">Для открытия ежедневного бонуса достигните 3 уровня</p>
                        </div>
                    </div>
                    {/*<div className="get-bonus">*/}
                    {/*    <div className="get-bonus__body">*/}
                    {/*        <p className="disabled-bonus__button">*/}
                    {/*            Получить <br/>*/}
                    {/*            БОНУС*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    <SliderBonus/>

                    {/*<div className="get-bonus">*/}
                    {/*    <div className="get-bonus__body">*/}
                    {/*        <p className="disabled-bonus__button">*/}
                    {/*            Получить <br/>*/}
                    {/*            БОНУС*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="get-bonus__bottom">*/}
                    {/*        <p className="get-bonus__info">Следующий бонус будет доступен*/}
                    {/*            через: 24 часа</p>*/}
                    {/*        <p id="bonus-timer" className="get-bonus__timer"></p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>


            </div>
        </main>
    )
}

export default DailyBonus