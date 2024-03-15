import './Header.scss'
import {Link, NavLink} from "react-router-dom"
import {useEffect, useState, useTransition} from "react"
import logo from '../../assets/images/logo.svg'
import en from '../../assets/images/langs/en.png'
import ru from '../../assets/images/langs/ru.png'
import uz from '../../assets/images/langs/uz.png'
import {useLang} from "../../context/LangProvider.jsx"

const Header = () => {

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
                    <nav className='nav row align-center g1'>
                        <ul className='nav__list row g2'>
                            <li className='item'>
                                <NavLink className='item__link' to='/'>Home</NavLink>
                            </li>
                            <li className='item'>
                                <a className='item__link' href='/#services'>Services</a>
                            </li>
                            <li className='item'>
                                <a className='item__link' href='/#doctors'>Doctors</a>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to='/vacancy'>Vacancy</NavLink>
                            </li>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
