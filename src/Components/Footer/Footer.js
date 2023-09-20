import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'
import { MdPhone } from 'react-icons/md'
import { CiGps } from 'react-icons/ci'
import { GoMail } from 'react-icons/go'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Footer() {
    // LANGUAGE
    const { t } = useTranslation(["footer"])
    return (
        <footer>
            <div className='footer_wrapper'>
                <div className='container'>
                    <div className='footer_media'>
                        <div className='logo'>
                            <img src='/logo.png' alt='logo' />
                            <h2>Zam Zam Travel</h2>
                        </div>
                        <ul className='footer_media-socials'>
                            <a href='https://fb.watch/j-RObOqA8N/'><BsFacebook /></a>
                            <a href='https://www.instagram.com/reel/Cq8VwHXMHoo/?igshid=YmMyMTA2M2Y='><BsInstagram /></a>
                            <a href='https://t.me/zamzam_traveluz'><BsTelegram /></a>
                        </ul>
                    </div>
                    <ul className='footer_navigation'>
                        <li><a href='#main'>{t("main")}</a></li>
                        <li><a href='#about'>{t("about")}</a></li>
                        <li><a href='#tour'>{t("tourism_programs")}</a></li>
                        <li><a href='#contact'>{t("contact")}</a></li>
                        <li><a href='https://drive.google.com/file/d/11eblIhikDUyC_6yXNUtIH8lvUjTjn1m1/view?usp=drive_link'>{t("license")}</a></li>
                    </ul>
                    <ul className='footer_contact'>
                        <li>
                            <h3>{t("contact_text")}</h3>
                        </li>
                        <li className='footer_contact-adddress'>
                            <CiGps />
                            <p>{t("address")}</p>
                        </li>
                        <li>
                            <MdPhone />
                            <a href='tel:+998992720033'>+998(99)272-00-33</a>
                        </li>
                        <li>
                            <MdPhone />
                            <a href='tel:+998911190033'>+998(91)119-00-33</a>
                        </li>
                        <li>
                            <GoMail />
                            <a href='mailto:iml-tickets@imlogistics.uz'>iml-tickets@imlogistics.uz</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer_copyright'>
                <h2>Copyright 2023</h2>
                <h2>{t("copyright")} <a href='https://webmasters.uz'>Webmasters</a></h2>
            </div>
        </footer>
    )
}

export default Footer