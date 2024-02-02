import {useSelector} from "react-redux";
import {selectPopup} from "@/state/popupSlice.js";
import CloseModal from "@/components/popups/CloseModal.jsx";
const ChatRules = () => {

    const popup = useSelector(selectPopup)

    return (
        <div  className={`modal modal--help iziModal ${popup === 'chatRules' ? 'active' : ''}`} id="chatModal">
            <div className="modal__top">
                <h6 className="modal__title">Правила чата</h6>
                <CloseModal/>
            </div>
            <div className="modal__body">
                <div className="modal-chat nano">
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

export default ChatRules