
import {useSelector} from "react-redux";
import {selectPopup} from "@/state/popupSlice.js";
import CloseModal from "@/pages/components/popups/CloseModal.jsx";

const GameRules = () => {

    const popup = useSelector(selectPopup)

    return (
        <div  className={`modal modal--help iziModal ${popup === 'gameRules' ? 'active' : ''}`} id="helpModal">
            <div className="modal__top">
                <h6 className="modal__title">Правила игры Classic</h6>
                <CloseModal/>
            </div>
            <div className="modal__body">
                <div className="modal-help nano">
                    <div className="nano-content">
                        <ol>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                            <li>Rules</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameRules