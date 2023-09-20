import React, { useState } from 'react'
// ICONS
import { MdEditLocationAlt, MdNavigateNext } from 'react-icons/md'
import { BsPersonHearts } from 'react-icons/bs'
import { GiParachute, GiWorld } from 'react-icons/gi'
import { BiSupport, BiPhone } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { RxCross1 } from 'react-icons/rx'
import ReactPlayer from 'react-player'

import i18next from 'i18next';
import { UserOutlined, CalendarOutlined, GlobalOutlined, IdcardOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// STYLE
import './Home.css'
import '../../Components/Card.css'
import axios from 'axios'
function Home() {
    // LANGUAGE
    const { t } = useTranslation(["home"])


    const [active, setActive] = useState(0);
    const [tourActive, setTourActive] = useState(0);
    const [photoActive, setPhotoActive] = useState(0);
    const [isModal, setIsModal] = useState(false)
    const [tourInfo, setTourInfo] = useState()
    const [name, setName] = useState()
    const [date, setDate] = useState()
    const [country, setCountry] = useState()
    const [id, setId] = useState()
    const [phone, setPhone] = useState()

    const artists = [
        {
            name: t("artist_name1"),
            description: t("artist_flight1"),
            price: "6.000.000",
            time: t("artist_time1"),
            backgroundUrl: "https://s9.travelask.ru/system/images/files/000/232/895/wysiwyg_jpg/%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0.jpg?1489172642"
        },
        {
            name: t("artist_name2"),
            description: t("artist_flight2"),
            price: "6.000.000",
            time: t("artist_time2"),
            backgroundUrl: "https://all.accor.com/magazine/imagerie/1-4033.jpg"
        },
        {
            name: t("artist_name3"),
            description: t("artist_flight3"),
            price: "6.000.000",
            time: t("artist_time3"),
            backgroundUrl: "https://guide-tours.ru/wp-content/uploads/2022/02/stambul-turciya.jpg"
        }
        ,
        {
            name: t("artist_name2"),
            description: t("artist_flight2"),
            price: "6.000.000",
            time: t("artist_time2"),
            backgroundUrl: "https://all.accor.com/magazine/imagerie/1-4033.jpg"
        }
    ];
    const tours = [
        {
            title: t("tour_name1"),
            price_title: t("tour_price1"),
            price: "6.000.000",
            time: t("tour_time1"),
            flight: t("tour_flight1"),
            living: t("tour_living1"),
            transfer: t("tour_transfer1"),
            img: 'https://assets3.thrillist.com/v1/image/3142938/3200x2314/scale;webp=auto;jpeg_quality=60.jpg',
        },
        {
            title: t("tour_name2"),
            price_title: t("tour_price2"),
            price: "6.000.000",
            time: t("tour_time2"),
            flight: t("tour_flight2"),
            living: t("tour_living2"),
            transfer: t("tour_transfer2"),
            img: 'https://www.advantour.com/img/georgia/images/tbilisi.jpg',
        },
        {
            title: t("tour_name3"),
            price_title: t("tour_price3"),
            price: "6.000.000",
            time: t("tour_time3"),
            flight: t("tour_flight3"),
            living: t("tour_living3"),
            transfer: t("tour_transfer3"),
            img: 'https://otdyhateli.com/wp-content/uploads/2016/03/Extraordinary-Velassaru-Island-in-the-Maldives-54.jpg',
        },
    ]
    const photos = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    function postData() {
        axios.post('https://intermodaltur.uz/api/client/', { fullname: name, date_of_birth: date, country: country, phone_number: phone, passport_data: id, ...tourInfo }, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo0ODQ4MjI2MTI2LCJpYXQiOjE2OTQ2MjYxMjYsImp0aSI6ImFmN2Q5N2JkNDQyODQ5ZTA5ZTc0YzhmM2Y5NWFlMzdkIiwidXNlcl9pZCI6MX0.G3RVXn33xlEJXLQE_hci7g-3Ylk7t-74eGyEQf51mBI" } })
            .then(res => {
                setIsModal(false)
                window.localStorage.setItem("isOrder", true)
                window.localStorage.setItem("orderID", res.data.id)
                window.localStorage.setItem("orderName", res.data.tour_name)
                window.localStorage.setItem("orderPrice", res.data.tour_price)
                // setIsOrdered(window.localStorage.getItem("isOrdered"))
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className={isModal ? 'modal_wrapper modal_wrapper-active' : 'modal_wrapper'}>
                <div className='modal'>
                    <button className='modal_close' onClick={() => setIsModal(false)}><RxCross1 /></button>
                    <h1 className='modal_title'>Заполните форму бронирования</h1>
                    <Input size="large" prefix={<UserOutlined />} placeholder='Введите ваше ФИО' width='100%' onChange={(e) => setName(e.target.value)} />
                    <Input size="large" type='date' prefix={<CalendarOutlined />} placeholder='Введите вашу дату рождения' width='100%' onChange={(e) => setDate(e.target.value)} />
                    <Input size="large" prefix={<GlobalOutlined />} placeholder='Введите вашу страну' width='100%' onChange={(e) => setCountry(e.target.value)} />
                    <Input size="large" prefix={<PhoneOutlined />} placeholder='Введите ваш номер телефона' width='100%' onChange={(e) => setPhone(e.target.value)} />
                    <Input size="large" prefix={<IdcardOutlined />} placeholder='Введите ваши паспортные данные (серию и номер ID)' width='100%' onChange={(e) => setId(e.target.value)} />
                    <button className='modal_btn' onClick={() => postData()}>Забронировать</button>
                </div>
            </div>
            <section className='home' id='main'>
                <div className='home_wrapper'>
                    <img src='/zyro-image.png' />
                    <h1 className='hometitle'>Zam Zam Travel</h1>
                    <h1 className='hometitle2'>{t("home_title1")}</h1>
                </div>
            </section>
            <section className='home_tour' id='tour'>
                <div className='container'>
                    <h2 className='home_title'>{t("home_title2")}</h2>
                </div>
                <ul className='home_tour-wrapper'>
                    {tours.map((tour, i) => (
                        <li
                            key={i}
                            style={{ backgroundImage: `url(${tour.img})` }}
                            role="button"
                            className={`home_tour-item ${tourActive === i ? 'active' : ''}`}
                            onClick={() => setTourActive(i)}
                        >
                            <h3 className='home_tour-subtitle'>{tour.title}</h3>
                            <div className="section-content">
                                <div className="inner">
                                    <div className="bio">
                                        <h2 className='home_tour-title'>{tour.title}</h2>
                                        <p className='home_tour-descr'>{tour.price_title}</p>
                                        <p className='home_tour-descr'>{tour.time}</p>
                                        <p className='home_tour-descr'>{tour.flight}</p>
                                        <p className='home_tour-descr'>{tour.living}</p>
                                        <p className='home_tour-descr'>{tour.transfer}</p>
                                        <div className='home_tour-block'>
                                            <a href='tel:+998936060033'> {t("consultation")} </a>
                                            <button className='home_tour-descr_btn'
                                                onClick={() => {
                                                    setTourInfo({
                                                        tour_name: tour.title,
                                                        tour_price: tour.price
                                                    })
                                                    setIsModal(true)
                                                }}
                                            >{t("book")}</button>
                                            {/* <a href='https://payme.uz/fallback/merchant/?id=63d91277455076b55e910beb&amount=600000000'> PayMe </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className='about' id='about'>
                <div className='container'>
                    <h2 className='about_title'>{t("home_title3")}</h2>
                    <h3 className='about_subtitle'>{t("home_title4")}</h3>
                    <ul className='about_advantages-block'>
                        <li>
                            <div className="card">
                                <div className="content">
                                    <MdEditLocationAlt />
                                    <p>{t("about_us1")}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="content">
                                    <BsPersonHearts />
                                    <p>{t("about_us2")}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="content">
                                    <BiSupport />
                                    <p>{t("about_us3")}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="content">
                                    <GiParachute />
                                    <p>{t("about_us4")}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* <section className='home_tour'>
                <div className='container'>
                    <h2 className='home_title'>{t("home_title5")}</h2>
                </div>
                <ul className='home_tour-wrapper'>
                    {artists.map((artist, i) => (
                        <li
                            key={i}
                            style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
                            role="button"
                            className={`home_tour-item ${active === i ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            <h3 className='home_tour-subtitle'>{artist.name}</h3>
                            <div className="section-content">
                                <div className="inner">
                                    <div className="bio">
                                        <h2 className='home_tour-title'>{artist.name}</h2>
                                        <p className='home_tour-descr'>{artist.description}</p>
                                        <p className='home_tour-descr'>{artist.time}</p>
                                        <p className='home_tour-descr'>{t("artist_price")}</p>
                                        <div className='home_tour-block'>
                                            <a href='tel:+998712815433'> {t("consultation")} </a>
                                            <button className='home_tour-descr_btn'
                                                onClick={() => {
                                                    setTourInfo({
                                                        tour_name: artist.title,
                                                        tour_price: artist.price
                                                    })
                                                    setIsModal(true)
                                                }}
                                            >{t("book")}</button>
                                            <a href='https://payme.uz/fallback/merchant/?id=63d91277455076b55e910beb&amount=600000000'> PayMe </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section> */}

            <section className='contact' id='contact'>
                <div className='container'>
                    <h2 className='about_title'>{t("home_title6")}</h2>
                    <ul className='contact_btns'>
                        {/* <li>
                            <div className='contact_btn-wrapper'>
                                <MdNavigateNext />
                            </div>
                            <p className='contact_btn-subtitle'>{t("contact_us1")}</p>
                            <a href='/'>{t("contact_us5")}</a>
                        </li> */}
                        <li>
                            <div className='contact_btn-wrapper'>
                                <BiPhone />
                            </div>
                            <p className='contact_btn-subtitle'>{t("contact_us2")}</p>
                            <a href='tel:+998936060033'>+998936060033</a>
                        </li>
                        <li>
                            <div className='contact_btn-wrapper'>
                                <BiPhone />
                            </div>
                            <p className='contact_btn-subtitle'>{t("contact_us2")}</p>
                            <a href='tel:+998992720033'>+998992720033</a>
                        </li>
                        {/* <li>
                            <div className='contact_btn-wrapper'>
                                <FaTelegramPlane />
                            </div>
                            <p className='contact_btn-subtitle'>{t("contact_us3")}</p>
                            <a href='mailto:iml-tickets@imlogistics.uz'>iml-tickets@imlogistics.uz</a>
                        </li> */}
                        <li>
                            <div className='contact_btn-wrapper'>
                                <GiWorld />
                            </div>
                            <p className='contact_btn-subtitle'>{t("contact_us4")}</p>
                            <a href='/'>zamzamtravelni.uz</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='photos'>
                <h2 className='about_title'>{t("home_title7")}</h2>
                <ul className='home_tour-wrapper photos_wrapper'>
                    {photos.map((photo, i) => (
                        <li
                            key={i}
                            style={{ backgroundImage: `url(${photo})` }}
                            role="button"
                            className={`home_tour-item ${photoActive === i ? 'active' : ''}`}
                            onClick={() => setPhotoActive(i)}
                        >

                        </li>
                    ))}
                </ul>
                <div className='container'>
                    <div className='player-wrapper'>
                        <ReactPlayer className="react-player" style={{ "marginTop": "50px", "borderRadius": "12px" }} width='100%' height='100%' url='https://www.youtube.com/watch?v=R5hmzJ_-NNM' />
                    </div>
                    <div className='player-wrapper'>
                        <ReactPlayer className="react-player" style={{ "marginTop": "50px", "borderRadius": "12px" }} width='100%' height='100%' url='https://www.youtube.com/watch?v=R5hmzJ_-NNM' />
                    </div>
                    <div className='player-wrapper'>
                        <ReactPlayer className="react-player" style={{ "marginTop": "50px", "borderRadius": "12px" }} width='100%' height='100%' url='https://www.youtube.com/watch?v=R5hmzJ_-NNM' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home