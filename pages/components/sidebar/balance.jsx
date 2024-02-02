import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "@/state/popupSlice.js";
import {selectUser} from "@/state/userSlice.js";


const Balance = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const handleShowPopup = () => {
        dispatch(setPopup('replenish'))
    }

    return (
        <div className="balance">
            <p className="balance__title">Баланс:</p>
            <p className="balance__value">{user?.balance}<span>COINS</span></p>
            <div className="balance__action">
                <a
                    onClick={handleShowPopup}
                    className="button balance__input"
                >ПОПОЛНИТЬ</a>

                <a className="button button--gray balance__output"
                   data-izimodal-open="#outputModal"
                   data-izimodal-transitionin="fadeInDown">ВЫВЕСТИ</a>
            </div>
        </div>
    )
}


export default Balance
