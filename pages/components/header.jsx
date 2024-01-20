import Image from "next/image";
import Link from 'next/link'
import useTheme from "@/hooks/useTheme.js";
import Logo from "../../public/images/logo.png"



const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header__left">

                <Link href="/" className="header__logo">
                    <Image src={Logo} alt="site"></Image>
                </Link>

            </div>

            <div className="header__center">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="/" className="nav__link"><i className="ic-nav1"/> JACKPOT</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/coinflip" className="nav__link">
                                <i className="ic-nav2"></i>COINFLIP
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/king-of-the-hill" className="nav__link">
                                <i className="ic-nav3"></i>KING OF THE HILL
                            </Link>

                        </li>
                        <li className="nav__item">
                            <Link href="/help" className="nav__link">
                                <i className="ic-nav4"></i>HELP</Link>
                        </li>
                    </ul>
                </nav>
                <div className="social-menu__wrap--adaptive">
                    <a className="social-menu__open">
                        <span></span>
                    </a>
                    <a className="social-menu__close">
                        <i className="ic-close"></i>
                    </a>
                    <ul className="social-menu">

                        <li className="social-menu__item">
                            <a href="#"
                               className="social-menu__link">
                                <i className="ic-moon"></i>
                            </a>
                        </li>
                        <li className="social-menu__item">
                            <a className="social-menu__link">
                                <i className="ic-user"></i>
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="social-menu__wrap">
                    <ul className="social-menu">

                        <li className="social-menu__item">
                            <a href="#" onClick={toggleTheme}
                               className="social-menu__link">
                                <i className="ic-moon"></i>
                            </a>
                        </li>
                        <li className="social-menu__item">
                            <a className="social-menu__link">
                                <i className="ic-user"></i>
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <a className="button chat__bottom-button btn-registration" data-izimodal-open="#auth"
               data-izimodal-transitionin="fadeInDown">ВОЙТИ</a>


            {false ?? (
                <div className="header__right user">
                    <div className="user__ava">
                        <img src="" alt="avatar"/>
                    </div>
                    <div className="user__info">
                        <span className="user__level">10 LVL.</span>
                        <span className="user__exp">1 EXP.</span>
                    </div>
                    <div className="user__left">
                        <a className="user__open">
                            <i className="ic-burger"></i>
                        </a>
                        <a className="user__close">
                            <i className="ic-close"></i>
                        </a>
                    </div>
                    <div className="user__dropdown dropdown">
                        <div className="dropdown__top">
                            <p className="dropdown__level">1 LEVEL.</p>

                            <p className="dropdown__exp">10 / <span>1000 EXP.</span></p>
                            <div className="dropdown__timeline"></div>
                        </div>
                        <ul className="dropdown__menu">
                            <li><a href="#">Профиль</a></li>
                            <li><a href="#">История игр</a></li>
                            <li><a href="#">Ежедневный бонус</a></li>
                            <li><a data-izimodal-open="#outputModal" data-izimodal-transitionin="fadeInDown">Вывести средства <i
                                className="ic-coin"></i></a></li>
                            <li><a href="#">Промокоды</a></li>
                            <li><a href="#">Выйти</a></li>
                        </ul>
                    </div>
                </div>
            )}


        </header>
    )
}

export default Header