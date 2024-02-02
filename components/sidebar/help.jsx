import {useDispatch} from "react-redux";
import {setPopup} from "@/state/popupSlice.js";

const Help = () => {

    const dispatch = useDispatch()

    return (
        <div className="help">
            <p className="help__title">Помощь</p>
            <a
                onClick={() => dispatch(setPopup('gameRules'))}
                className="help__link" data-izimodal-open="#helpModal" data-izimodal-transitionin="fadeInDown">
                <i className="ic-rules"></i>
                Правила игры
            </a>
        </div>
    )
}

export default Help