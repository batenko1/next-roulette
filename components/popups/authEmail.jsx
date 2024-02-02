import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectPopup, setPopup} from "@/state/popupSlice.js";
import {setUser} from "@/state/userSlice.js";

const AuthEmail = () => {

    const popup = useSelector(selectPopup)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(({token, user}) => {
                localStorage.setItem('token', token);
                dispatch(setUser(user))
                dispatch(setPopup(null))
            }).catch(error => {
                console.log(error)
            })

    }

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


                <input type="submit" onClick={handleSubmit} name="Зарегистрироваться"/>
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