import React, { useState, useEffect } from 'react';
import Container from './Container';

function Popup() {
  return (
    <Container>
        <div className="popup__mobile popup__mobile_search">
            <div className="popup__mobile_header">
                <div className="logo"><img src="/static/img/icons/logo.svg" /></div>
                <button className="closeIcon close__popup__mobile"/>
            </div>
            <form className="popup__mobile_search">
                <input placeholder="Поиск" />
                <button className="popup__mobile_search_btn" type="submit" >
                <svg width="26" height="27" viewBox="0 0 26 27" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M25.5779 25.5745L15.6867 15.4357C17.1374 13.7955 18.0225 11.6204 18.0225 9.23732C18.0225 4.14388 13.9797 0 9.01075 0C4.04176 0 -0.000976562 4.14388 -0.000976562 9.23732C-0.000976562 14.3308 4.04166 18.4746 9.01075 18.4746C10.9472 18.4746 12.7428 17.8452 14.2135 16.7756L24.1878 26.9995C24.1666 27.0315 25.5916 25.588 25.5779 25.5745ZM1.92764 9.23732C1.92764 5.23356 5.10541 1.9762 9.01145 1.9762C12.9174 1.9762 16.0952 5.23356 16.0952 9.23732C16.0952 13.2412 12.9174 16.4985 9.01145 16.4985C5.10541 16.4985 1.92764 13.2412 1.92764 9.23732Z"></path></svg>
                </button>
            </form>
        </div>

        <div className="popup__mobile popup__mobile_socials">
            <div className="popup__mobile_header">
                <div className="socials">
                    <a href="#"><img src="/static/img/icons/socials/fb.svg" /></a>
                    <a href="#"><img src="/static/img/icons/socials/vk.svg" /></a>
                    <a href="#"><img src="/static/img/icons/socials/instagram.svg" /></a>
                    <a href="#"><img src="/static/img/icons/socials/twitter.svg" /></a>
                    <a href="#"><img src="/static/img/icons/socials/ok.svg" /></a>
                </div>
                <button className="closeIcon close__popup__mobile"/>
            </div>
        </div>
        <div className="popup__mobile popup__mobile_menu">
            <div className="popup__mobile_header">
                <div className="logo">
                    <img src="/static/img/icons/logo.svg"/>
                </div>
                <button className="closeIcon close__popup__mobile"/>
            </div>
            <div className="popup__mobile_nav anchors">
                <a className="link__active" href="#about">О нас</a>
                <a href="#projects">Проекты</a>
                <a href="#new">Новые выпуски</a>
                <a href="#specials">Спецпроекты</a>
                <a href="#specials">Читать онлайн</a>
                <a href="#specials">Контакты</a>
                <a href="#specials">Личный кабинет</a>
            </div>
        </div>
    </Container>
  );
}

export default Popup;