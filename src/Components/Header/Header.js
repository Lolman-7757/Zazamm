import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

function Header() {
    const [header, setHeader] = useState(false)
    const [navigation, setNavigation] = useState(false)
    window.addEventListener('scroll', () => {
        window.scrollY > 100 ? setHeader(true) : setHeader(false)
    })
    // LANGUAGE
    const { i18n, t } = useTranslation(["header"])
    useEffect(() => {
        if (localStorage.getItem("i18nextLng") > 2) {
            i18next.changeLanguage("en")
        }
    }, [])

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e)
    }



    return (
        <header className={header ? 'active' : 'non-active'}>
            <div className='container'>
                <div className='logo'>
                    <img className='logo_title' src='/zyro-image.png' alt='logo'/>
                    <h2>Zam Zam Travel</h2>
                </div>
                <ul className='header_navs'>
                    <li><a href='#main'>{t("main")}</a></li>
                    <li><a href='#about'>{t("about")}</a></li>
                    <li><a href='#tour'>{t("tourism_programs")}</a></li>
                    <li><a href='#contact'>{t("contact")}</a></li>
                </ul>
                <div className='header_lang-block'>
                    <button onClick={() => changeLanguage("uz")} value="uz"><Flag code="uzb" /></button>
                    <button onClick={() => changeLanguage("en")} value="en"><Flag code="usa" /></button>
                    <button onClick={() => changeLanguage("ru")} value="ru"><Flag code="rus" /></button>
                </div>
                <button className='header_burger-btn' onClick={() => { setNavigation(!navigation) }}>
                    <HiOutlineBars3BottomRight />
                </button>
            </div>
            <nav className={`header_modal ${navigation ? 'header_modal-active' : 'header_modal-deactive'}`}>
                <div className='header_lang-block'>
                    <button onClick={() => changeLanguage("uz")} value="uz"><Flag code="uzb" /></button>
                    <button onClick={() => changeLanguage("en")} value="en"><Flag code="usa" /></button>
                    <button onClick={() => changeLanguage("ru")} value="ru"><Flag code="rus" /></button>
                </div>
                <ul className='header_navs'>
                    <li><a href='#main'>{t("main")}</a></li>
                    <li><a href='#about'>{t("about")}</a></li>
                    <li><a href='#tour'>{t("tourism_programs")}</a></li>
                    <li><a href='#contact'>{t("contact")}</a></li>
                </ul>
                <div className='logo'>
                    <img className='logo_title' src='/logo.png' alt='logo'/>
                </div>
            </nav>
        </header>
    )
}

export default Header