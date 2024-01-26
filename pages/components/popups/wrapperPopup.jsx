import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectPopup, setPopup} from "@/state/popupSlice.js";

import Auth from './auth'
import AuthEmail from "./authEmail";
import Registration from "./registration";
import JackpotBet from "@/pages/components/popups/jackpot-bet.jsx";

const WrapperPopup = () => {

    const popup = useSelector(selectPopup)
    const dispatch = useDispatch()

    return (
        <>
            <Auth/>
            <AuthEmail/>
            <Registration/>
            <JackpotBet/>
            <div
                onClick={() => dispatch(setPopup(null))}
                className={`iziModal-overlay ${popup ? 'active' : ''}`}></div>
        </>

    )
}

export default WrapperPopup