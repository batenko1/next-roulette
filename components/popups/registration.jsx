import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectPopup, setPopup} from "@/state/popupSlice.js";
import {setUser} from "@/state/userSlice.js";

const Registration = () => {

    const dispatch = useDispatch()

    const popup = useSelector(selectPopup)

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login, email, name, lastName, password}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {

                localStorage.setItem('token', data.token);
                dispatch(setUser(data.user))
                dispatch(setPopup(null))

            })

    }


    return (
        <div className={`modal modal--help iziModal ${popup === 'registration' ? 'active' : ''}`} id="authRegistration">
            <span>Регистрация</span>
            <form action="">
                <ul>
                    <li>
                        <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин"/>

                            <div className="error-message"></div>
                    </li>
                    <li>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>

                            <div className="error-message"></div>

                    </li>
                    <li><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                               placeholder="Имя"/>

                        <div className="error-message"></div>

                    </li>
                    <li><input type="text" name="last_name"
                               value={lastName} onChange={(e) => setLastName(e.target.value)}
                               placeholder="Фамилия"/>

                        <div className="error-message"></div>

                    </li>
                    <li>
                        <input type="password" name="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="Пароль"/>

                            <div className="error-message"></div>

                    </li>
                    <li>
                        <input type="password" name="repeatPassword"
                               value={repeatPassword}
                               onChange={(e) => setRepeatPassword(e.target.value)}
                               placeholder="Повторите пароль"/>
                        <br/>

                            <div className="error-message"></div>

                    </li>
                </ul>
                <input type="submit" name="Зарегистрироваться" onClick={handleSubmit}/>
                <br/>
                    <a onClick={() => dispatch(setPopup('authEmail'))}>Уже зарегистрированы?</a>
            </form>
        </div>
    )

}

export default Registration