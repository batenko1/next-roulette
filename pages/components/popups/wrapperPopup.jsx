import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectPopup, setPopup} from "@/state/popupSlice.js";

import Auth from './auth'
import AuthEmail from "./authEmail";
import Registration from "./registration";
import JackpotBet from "@/pages/components/popups/jackpot-bet.jsx";
import Replenish from "@/pages/components/popups/replenish.jsx";
import GameRules from "@/pages/components/popups/GameRules.jsx";
import ChatRules from "@/pages/components/popups/ChatRules.jsx";

const WrapperPopup = () => {

    const popup = useSelector(selectPopup)
    const dispatch = useDispatch()

    return (
        <>
            <Auth/>
            <AuthEmail/>
            <Registration/>
            <JackpotBet/>
            <Replenish/>
            <GameRules/>
            <ChatRules/>


            <div
                onClick={() => dispatch(setPopup(null))}
                className={`iziModal-overlay ${popup ? 'active' : ''}`}></div>
        </>

    )
}

export default WrapperPopup