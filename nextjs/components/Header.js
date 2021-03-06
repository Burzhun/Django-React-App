import React, {useState, useEffect} from 'react';
import Container from './Container'
import Popup from './Popup';
import Head from 'next/head';
import Link from "next/link";

function Header() {
    return (
        <Container>
            <Head>
                <script src="/static/js/libs.js"></script>
                <script src="/static/js/common.js"></script>
            </Head>
            <Popup/>
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <Link href="/">
                            <img src="/static/img/icons/logo.svg"/>
                        </Link>
                    </div>
                    <nav>
                        <a href="/issues">Смотреть выпуски</a>
                        <a href="/#specials">Архив спецпроектов</a>
                        <a href="/contacts">Контакты</a>
                        <form className="form__search_header">
                            <input placeholder="Введите название издания, номер выпуска или заголовок статьи"/>
                            <button className="btn" type="submit">ОК</button>
                        </form>
                    </nav>
                    <div className="media">
                        {/*<button className="media__search media__link">*/}
                        {/*    <svg width="26" height="27" viewBox="0 0 26 27" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M25.5779 25.5745L15.6867 15.4357C17.1374 13.7955 18.0225 11.6204 18.0225 9.23732C18.0225 4.14388 13.9797 0 9.01075 0C4.04176 0 -0.000976562 4.14388 -0.000976562 9.23732C-0.000976562 14.3308 4.04166 18.4746 9.01075 18.4746C10.9472 18.4746 12.7428 17.8452 14.2135 16.7756L24.1878 26.9995C24.1666 27.0315 25.5916 25.588 25.5779 25.5745ZM1.92764 9.23732C1.92764 5.23356 5.10541 1.9762 9.01145 1.9762C12.9174 1.9762 16.0952 5.23356 16.0952 9.23732C16.0952 13.2412 12.9174 16.4985 9.01145 16.4985C5.10541 16.4985 1.92764 13.2412 1.92764 9.23732Z"></path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                        {/*<a className="media__basket media__link" href="#">*/}
                        {/*    <span className="media__basket_count basket__count">2</span>*/}
                        {/*    <svg width="35" height="27" viewBox="0 0 35 27" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M13.41 18.18H25.74C27.63 18.18 29.34 17.01 29.88 15.21L34.2 2.88H5.58L4.68 0.18C4.59 0.09 4.41 0 4.23 0H0.36C0.18 0 0 0.18 0 0.36V0.99C0 1.17 0.18 1.35 0.36 1.35H3.6L9.99 19.8C8.91 20.43 8.1 21.69 8.1 23.04C8.1 25.2 9.9 27 12.06 27C14.22 27 16.02 25.2 16.02 23.04C16.02 22.68 15.93 22.32 15.84 21.96H22.32C22.23 22.32 22.14 22.68 22.14 23.04C22.14 25.2 23.94 27 26.1 27C28.26 27 30.06 25.2 30.06 23.04C30.06 20.88 28.26 19.08 26.1 19.08C24.84 19.08 23.76 19.71 23.04 20.61H15.3C14.58 19.71 13.5 19.08 12.24 19.08C11.97 19.08 11.7 19.08 11.43 19.17L10.44 17.1C11.25 17.73 12.33 18.18 13.41 18.18ZM18.09 4.59H21.42H32.13L28.62 14.04C28.08 15.39 26.73 16.29 25.2 16.29H21.42H20.61H18.36H18.09H13.68C12.15 16.29 10.71 15.39 10.26 14.04L6.75 4.59H18.09Z"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        {/*<button className="media__user media__link">*/}
                        {/*    <svg width="29" height="27" viewBox="0 0 29 27" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M19.89 14.4C21.51 12.87 22.5 10.71 22.5 8.37C22.41 3.78 18.72 0 14.13 0C9.54 0 5.76 3.78 5.76 8.37C5.76 10.71 6.75 12.87 8.28 14.4C3.42 16.56 0.09 21.33 0 27H28.17C28.08 21.42 24.75 16.65 19.89 14.4ZM14.04 15.12C10.35 15.12 7.38 12.15 7.38 8.46C7.38 4.77 10.35 1.8 14.04 1.8C14.04 1.8 14.04 1.8 14.13 1.8C14.13 1.8 14.13 1.8 14.22 1.8C17.82 1.8 20.79 4.77 20.79 8.37C20.79 8.37 20.79 8.37 20.79 8.46C20.79 8.73 20.79 8.91 20.7 9.18C20.7 9.27 20.7 9.27 20.7 9.36C20.7 9.54 20.61 9.72 20.61 9.99V10.08C19.71 12.96 17.1 15.12 14.04 15.12Z"></path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                        <button className="media__socials media__link">
                            <div className="socials">
                                <a href="#">
                                    <img src="/static/img/icons/socials/fb.svg"/>
                                </a>
                                <br/>
                                <a href="#">
                                    <img src="/static/img/icons/socials/vk.svg"/>
                                </a>
                                <br/>
                                <a href="#">
                                    <img src="/static/img/icons/socials/twitter.svg"/>
                                </a>
                                <br/>
                                <a href="#">
                                    <img src="/static/img/icons/socials/ok.svg"/>
                                </a>
                            </div>
                            <svg width="24" height="27" viewBox="0 0 24 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.98 0.0360336C17.73 0.0360336 15.93 1.836 15.93 3.996C15.93 4.446 16.02 4.80599 16.11 5.16599L6.93003 10.476C6.21003 9.66601 5.13003 9.12601 3.96003 9.12601C1.71003 9.12601 -0.0899658 10.926 -0.0899658 13.086C-0.0899658 15.246 1.71003 17.046 3.96003 17.046C4.77003 17.046 5.58003 16.776 6.30003 16.326L15.75 21.726C15.66 22.086 15.57 22.536 15.57 22.986C15.57 25.146 17.37 26.946 19.62 26.946C21.87 26.946 23.67 25.146 23.67 22.986C23.67 20.826 21.87 19.026 19.62 19.026C18.45 19.026 17.37 19.476 16.65 20.376L7.47003 15.156C7.83003 14.526 8.01003 13.896 8.01003 13.176C8.01003 12.726 7.92003 12.366 7.83003 12.006L17.01 6.696C17.73 7.506 18.81 8.046 19.98 8.046C22.23 8.046 24.03 6.24603 24.03 4.08603C24.03 1.74603 22.23 0.0360336 19.98 0.0360336Z"></path>
                            </svg>
                        </button>
                        <button className="media__link media__mobile_show">
                            <svg width="37" height="27" viewBox="0 0 37 27" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M37 0H0V2H37V0Z"></path>
                                    <path d="M37 12.2998H0V14.2998H37V12.2998Z"></path>
                                    <path d="M37 25H0V27H37V25Z"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="37" height="27"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {/*<div className="popup popup__buy">*/}
            {/*    <div className="popup__content">*/}
            {/*        <div className="product__helper">Товар добавлен в корзину.</div>*/}
            {/*        <div className="item__journal">*/}
            {/*            <div className="item__journal_img"><img src="/static/img/journ6.png"/></div>*/}
            {/*            <div className="item__journal_content">*/}
            {/*                <div className="item__journal_title">National Geographic Россия</div>*/}
            {/*                <div className="item__journal_number_date"><span>№188</span> (Апрель 2019)</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="popup__btn">*/}
            {/*            <div className="btn btn-red">Оплатить и скачать</div>*/}
            {/*            <button className="btn popup__close">Вернуться</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="popup popup__account">*/}
            {/*    <div className="popup__content">*/}
            {/*        <button className="popup__close closeIcon"></button>*/}
            {/*        <div className="popup__navigation">*/}
            {/*            <button className="show__login show__active"><span>Вход</span>&nbsp;|&nbsp;</button>*/}
            {/*            <button className="show__registration"><span>Регистрация</span></button>*/}
            {/*        </div>*/}
            {/*        <div className="popup__login popup__active">*/}
            {/*            <form>*/}
            {/*                <p>*/}
            {/*                    <input placeholder="Логин" required=""/>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <input type="password" placeholder="Пароль" required=""/>*/}
            {/*                </p>*/}
            {/*                <div className="popup__login_btn">*/}
            {/*                    <button className="btn btn__login" type="submit">Войти</button>*/}
            {/*                    <a className="show__reset" href="#">Забыли пароль?</a></div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*        <div className="popup__reset">*/}
            {/*            <form>*/}
            {/*                <p>Введите e-mail, указанный при регистрации</p>*/}
            {/*                <p>*/}
            {/*                    <input placeholder="E-mail" required=""/>*/}
            {/*                </p>*/}
            {/*                <div className="popup__login_btn">*/}
            {/*                    <button className="btn btn__reset" type="submit">восстановить пароль</button>*/}
            {/*                </div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*        <div className="popup__registration">*/}
            {/*            <form>*/}
            {/*                <p>*/}
            {/*                    <input placeholder="E-mail" type="email" required=""/>*/}
            {/*                </p>*/}
            {/*                <p className="duo">*/}
            {/*                    <input placeholder="Имя"/>*/}
            {/*                    <input placeholder="Телефон" type="phone"/>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <input placeholder="Пароль (только латинские буквы и цифры)" type="email" required=""/>*/}
            {/*                </p>*/}
            {/*                <p>*/}
            {/*                    <input placeholder="Повторите пароль" type="email" required=""/>*/}
            {/*                </p>*/}
            {/*                <div className="custom__checkbox">*/}
            {/*                    <label className="custom__checkbox_container">Я ознакомился/ась и принимаю условия*/}
            {/*                        <a href="#">политики ООО «Ясно Паблишинг» в отношении обработки персональных*/}
            {/*                            данных</a> и*/}
            {/*                        <a href="#">соглашения об условиях размещения материалов</a>*/}
            {/*                        <input type="checkbox" required=""/><span className="checkmark"/>*/}
            {/*                    </label>*/}
            {/*                </div>*/}
            {/*                <button className="btn btn__registration" type="submit">Зарегистрироваться</button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Container>
    );
}

export default Header;
