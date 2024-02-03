import {useDispatch} from "react-redux";
import {setPopup} from "@/state/popupSlice.js";
import {useTranslation} from "react-i18next";

const Help = () => {

    const dispatch = useDispatch()
    const {t} = useTranslation()

    return (
        <div className="help">
            <p className="help__title">{t('Помощь')}</p>
            <a
                onClick={() => dispatch(setPopup('gameRules'))}
                className="help__link" data-izimodal-open="#helpModal" data-izimodal-transitionin="fadeInDown">
                <i className="ic-rules"></i>
                {t('Правила игры')}
            </a>
        </div>
    )
}

export default Help