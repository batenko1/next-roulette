import {useState} from "react";
import {useSelector} from "react-redux";
import {useReplenish} from "@/hooks/useReplenish.js";
import {selectPopup} from "@/state/popupSlice.js";
import {selectUser} from "@/state/userSlice.js";

import CloseModal from "@/components/popups/CloseModal.jsx";

const Replenish = () => {

    const [count, setCount] = useState(0)

    const popup = useSelector(selectPopup)
    const user = useSelector(selectUser)

    const {replenishBalance} = useReplenish()

    const handleReplenish = async () => {
        await replenishBalance(count, user, 1)
    }

    return (
        <div
            className={`modal conclusion iziModal ${popup === 'replenish' ? 'active' : ''}`}
            id="inputModal">
            <div className="modal__top">
                <h6 className="modal__title">Пополнение баланса</h6>
                <CloseModal/>
            </div>
            <div className="modal__body">
                <div className="conclusion__balance">
                    <p className="conclusion__balance-text">Текущий баланс:</p>
                    <p className="conclusion__balance-value">{user?.balance} <span>coins</span></p>
                </div>
                <div className="output-box">
                    <div className="output-box__top">
                        <p className="output-box__text output-box__text--two">Сумма <br/>пополнения</p>
                        <input type="number" value={count} onChange={(e) => setCount(e.target.value)}
                               className="output-box__field"/>
                        <p className="output-box__hint">
                            Максимальная сумма платежа: 15 000Р <br/>
                            Минимальная сумма: 50Р
                        </p>
                    </div>
                </div>
                <div className="conclusion__where">
                    <p className="conclusion__where-title">Способы оплаты</p>
                    <ul className="conclusion__where-list">
                        <li>
                            <label className="output-radio">
                                <input type="radio" defaultChecked={true} name="inputType" value="1"/>
                                <span className="output-radio__box">
                                    <i className="ic-qiwi"></i>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="output-radio">
                                <input type="radio" name="inputType" value="2"/>
                                <span className="output-radio__box">
                                    <i className="ic-sber"></i>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="output-radio">
                                <input type="radio" name="inputType" value="3"/>
                                <span className="output-radio__box">
                                     <img src="" alt=""/>
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="output-radio">
                                <input type="radio" name="inputType" value="4"/>
                                <span className="output-radio__box">
                                     <img src="" alt=""/>
                                </span>
                            </label>
                        </li>
                    </ul>
                    <div id="outputRequisites" className="output-requisites">
                        <p className="output-requisites__text">Реквизиты:</p>
                        <input type="text" name="requisites" className="output-requisites__input"
                               placeholder="Введите номер"/>
                    </div>
                </div>
                <div className="modal__buttons">
                    <a href="#" onClick={handleReplenish} className="button">Пополнить</a>
                </div>
            </div>
        </div>
    )
}

export default Replenish