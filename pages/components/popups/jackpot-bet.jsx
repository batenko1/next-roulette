import {useSelector} from "react-redux";
import {selectPopup} from "@/state/popupSlice.js";
const JackpotBet = () => {
    
    const popup = useSelector(selectPopup)
    
    return (
        <div className={`modal modal--bet iziModal ${popup === 'jackpot-bet' ? 'active': ''}`} id="betModal">
            <div className="modal__top">
                <h6 className="modal__title">СДЕЛАТЬ СТАВКУ</h6>
                <a className="modal__close">
                    <i className="ic-close"></i>
                </a>
            </div>
            <div className="modal__body">
                <div className="conclusion__balance">
                    <p className="conclusion__balance-text">Текущий баланс:</p>
                    <p className="conclusion__balance-value">0 <span>coins</span></p>
                </div>
                <form className="bet__form">

                    <div className="bet__form-wrap">
                        <label className="bet__form-label">COINS</label>
                        <div id="coins" className="bet__form-box">

                            <input type="number"
                                   className="bet__form-input cash-coins"
                                   min="10"
                                   max="300"
                                   defaultValue="10"/>

                            <span className="bet__form-up"></span>
                            <span className="bet__form-down"></span>
                        </div>
                    </div>
                    <span className="bet__form-sum">=</span>
                    <div className="bet__form-wrap bet__form-wrap--gray">
                        <label className="bet__form-label">руб</label>
                        <div id="coins-result" className="bet__form-box count-money">

                            <input type="number" className="bet__form-input" readOnly defaultValue="1"/>

                            <span className="bet__form-up"></span>
                            <span className="bet__form-down"></span>
                        </div>
                    </div>
                </form>

                <div className="warning__balance hide">
                    <p className="warning__balance-text">* На вашем счете недостаточно средств для ставки</p>
                </div>
                <div className="modal__buttons">
                    <a href="#"
                       className="button button--gradient">СДЕЛАТЬ СТАВКУ</a>
                    <a href="#" className="button" data-izimodal-open="#inputModal"
                       data-izimodal-transitionin="fadeInDown">Пополнить</a>
                </div>
            </div>
        </div>
    )
}

export default JackpotBet