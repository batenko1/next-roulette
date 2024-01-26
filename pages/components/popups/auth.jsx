import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import Image from "next/image";

import {selectPopup, setPopup} from "@/state/popupSlice.js";

import IconVk from "../../../public/images/icons-vk-96.png"
import IconFb from "../../../public/images/icons-facebook-96.png"
import IconEmail from "../../../public/images/icons-email-96.png"

const Auth = () => {

    const dispatch = useDispatch()
    const popup = useSelector(selectPopup)

    return (
        <div className={`modal modal--bet iziModal ${popup === 'auth' ? 'active' : ''}` } id="auth">
            <span>Авторизация</span>
            <ul>
                <li>
                    <a href="/oauth/vkontakte">
                        <Image src={IconVk} alt="text" />

                    </a>
                </li>
                <li>
                    <a href="/oauth/facebook">
                        <Image src={IconFb} alt="text" />
                    </a>
                </li>
                <li>
                    <a
                       onClick={() => dispatch(setPopup('authEmail'))}
                       className="standart-auth">
                        <Image src={IconEmail} alt="text" />
                    </a>
                </li>
            </ul>

            <label htmlFor="checkAuth">
                <input id="checkAuth" type="checkbox" name="agree" />
                Я подтверждаю что мне есть 18 лет и я согласен с
                <Link href="/help">условиями сайта</Link>
            </label>
        </div>
    )

}

export default Auth