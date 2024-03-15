import './Header.scss'
import {Link, NavLink} from "react-router-dom"
import {useEffect, useState, useTransition} from "react"
import logo from '../../assets/images/logo.svg'
import en from '../../assets/images/langs/en.png'
import ru from '../../assets/images/langs/ru.png'
import uz from '../../assets/images/langs/uz.png'
import {useLang} from "../../context/LangProvider.jsx"
import {navList} from "../../assets/mock/navList.js";

const Header = () => {

    const [navActive, setNavActive] = useState(false)


    const [activeLang, setActiveLang] = useState(false)

    const langs = [
        {
            title: 'Russian',
            txt: 'ru',
            img: ru,
        },
        {
            title: 'English',
            txt: 'en',
            img: en,
        },
        {
            title: 'Uzbek',
            txt: 'uz',
            img: uz,
        }
    ]
    const { lang, setLang } = useLang()
    useEffect(() => {
        setLang(langs.find(i => i.txt === lang))
    }, [])


    const { t, i18n } = useTransition()
    const changeLanguage = (language) => {
        setLang(language)
        setActiveLang(false)
        i18n.changeLanguage(language.txt)
    }
    console.log(i18n, t)


    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner row between align-center g1">
                    <Link className='header__logo' to='/'>
                        <img className='img' src={logo} alt="logo"/>
                    </Link>
                    <nav className={`nav ${navActive ? 'active' : ''}`}>
                        <ul className='nav__list row g2'>
                            {
                                navList.map((i, index) => (
                                    <li className='item' key={index} onClick={() => setNavActive(false)}>
                                        {
                                            i.link ?
                                                <NavLink className='item__link' to={i.link}>{ i.name }</NavLink>
                                                :
                                                <a className='item__link' href={i.href}>{ i.name }</a>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <div className='row align-center'>
                        <div className={`nav__lang lang ${activeLang ? 'active' : ''}`}>
                            <button className='lang__main row align-center'  onClick={() => setActiveLang(!activeLang)}>
                                <img className='img' src={lang?.img} alt="icon"/>
                                <i className="fa-solid fa-angle-down icon"/>
                            </button>
                            <ul className='lang__list'>
                                {
                                    langs.map((i, index) => (
                                        i.txt !== lang?.txt &&
                                        <li
                                            className='item'
                                            onClick={() => changeLanguage(i)}
                                            key={index}
                                        >
                                            <img className='img' src={i.img} alt={i.title}/>
                                            <span className='txt'>{ i.title }</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <a className='header__btn btn' href='/#contact'>Contact us</a>

                        <button className='open-nav' onClick={() => setNavActive(!navActive)}>
                            {
                                navActive ?
                                    <i className="fa-solid fa-xmark"/>
                                    : <i className="fa-solid fa-bars"/>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
