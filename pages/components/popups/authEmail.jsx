import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectPopup, setPopup} from "@/state/popupSlice.js";

const AuthEmail = () => {

    const popup = useSelector(selectPopup)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={`modal modal--help iziModal ${popup === 'authEmail' ? 'active': ''}`} id="authLogin">
            <span>Авторизация</span>
            <form action="">
                <ul>
                    <li>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        <div className="error-message"></div>
                    </li>
                    <li>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"/>
                        <br/>
                    </li>
                </ul>


                <input type="submit" name="Зарегистрироваться"/>
                <br/>
                <a
                    onClick={() => dispatch(setPopup('registration'))}
                    data-izimodal-open="#authRegistration"
                   data-izimodal-transitionin="fadeInDown">Нет аккаунта?</a>
            </form>
        </div>
    )
}

export default AuthEmail