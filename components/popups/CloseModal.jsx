import {setPopup} from "@/state/popupSlice.js";
import {useDispatch} from "react-redux";

const CloseModal = () => {

    const dispatch = useDispatch()

    return (
        <a className="modal__close" onClick={() => dispatch(setPopup(null))}><i className="ic-close"></i></a>
    )

}

export default CloseModal