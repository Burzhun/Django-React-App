import React, { useState, useEffect } from 'react';
import Container from './Container'

function Footer() {
  return (
    <Container>
        <div className="footer_margin"></div>
        <footer>
            <div className="wrapper">
                <div className="row">
                    <div className="logo">
                        <img src="/static/img/icons/logo__footer.svg" />
                    </div>
                    <div className="copy">© 2019 Ясно Publishing <br />  Все права защищены.</div>
                </div>
                <div className="row"
                    ><div className="footer_title">ЯСНО PUBLISHING</div>
                    <div className="footer_menu">
                        <a className="footer_link" href="/#about">О нас</a>
                        <a className="footer_link" href="/#projects">Проекты</a>
                        <a className="footer_link" href="/#new">Новые выпуски</a>
                        <a className="footer_link" href="/#specials">Спецпроекты</a>
                        <a className="footer_link" href="/issues">Смотреть выпуски</a>
                    </div>
                </div>
                <div className="row">
                    <div className="footer_title">следить за новостями</div>
                    <div className="footer_menu">
                        <a className="footer_link" href="https://www.facebook.com/moscowtimes.org">Mы в Facebook</a>
                        <a className="footer_link" href="/feed/">RSS</a>
                        <div className="footer_link">E-mail рассылка</div>
                    </div>
                    <form className="footer_form"><input placeholder="E-mail" name="email" type="email" required="" /><button type="submit">OK</button>
                    </form>
                </div>
                <div className="row">
                    <div className="bug_info">ООО «Ясно Publishing»<br />  ОГРН 1157746144467<br />  ИНН/КПП 7704306823/771501001<br />  Название банка АО «Райффайзенбанк»<br />  БИК 044525700 Р/счет 40702810100000003650 <br />  К/счет 30101810200000000700<br />   127018, г. Москва, <br />  ул. Полковая, д. 3, стр. 1 <br />  +7 (495) 232-92-92</div>
                </div>
            </div>
        </footer>
    </Container>
  );
}

export default Footer;
