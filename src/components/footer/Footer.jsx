import './Footer.scss'
import {Link} from "react-router-dom"
import logo from '../../assets/images/logo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div>
                        <Link className='footer__logo' to='/'>
                            <img className='img' src={logo} alt="logo"/>
                        </Link>
                        <div className='footer__calls'>
                            <span className='sub'>Let's talk</span>
                            <a className='link mail' href="mailto:vivamed@gmail.com">vivamed@gmail.com</a>
                            <a className='link' href="tel:+998555175134">+998(55)517-51-34</a>
                        </div>
                        <div className="footer__social">
                            <span className='sub'>Follow us</span>
                            <div className='row align-center g1'>
                                <a className='link' href="https://instagram.com/vivamed" target='_blank'>
                                    <i className="fa-brands fa-instagram"/>
                                </a>
                                <a className='link' href="https://t.me/vivamed" target='_blank'>
                                    <i className="fa-brands fa-telegram"/>
                                </a>
                                <a className='link' href="https://facebook.com/vivamed" target='_blank'>
                                    <i className="fa-brands fa-facebook"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='footer__nav'>
                        <span className='title'>Quick links</span>
                        <ul>
                           <li className='item'>
                               <Link className='item__link' to='/'>Home</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/#services'>Services</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/#doctors'>Doctors</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/vacancy'>Vacancy</Link>
                           </li>
                        </ul>
                    </div>
                    <div className='footer__nav'>
                        <span className='title'>Quick links</span>
                        <ul>
                           <li className='item'>
                               <Link className='item__link' to='/'>Home</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/#services'>Services</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/#doctors'>Doctors</Link>
                           </li>
                           <li className='item'>
                               <Link className='item__link' to='/vacancy'>Vacancy</Link>
                           </li>
                        </ul>
                    </div>
                </div>
                <address className='footer__address'>
                    Улица Азима Умарова, 21 дом, Сергелийский район, Ташкент
                </address>
                <div className='footer__rights'>
                    <p className='desc'>© 2024 Viva med. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
