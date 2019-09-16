import React from 'react';
import Layout from '../components/Layout';
import BasketItemsSet from '../components/Basket/BasketItemsSet';

function ProfilePage() {
    const basketitemsSet=[{
        'id':1,'number':12,'date':'04.19','image_link':'http://google.com','title':'Magazine1','price':900
    }];


  return ( 
    <Layout>
        <div class="grey__wrapp">
            <div class="container">
                <div class="anchors anchors__profile">
                    <a class="anchors__profile_active" href="#profile">Профиль</a>
                    <a href="#basket" class="">Корзина (<span class="basket__count">2</span>)</a>
                    <a href="#deferred" class="">Отложенное</a>
                    <a href="#myJournals" class="">Мои журналы</a>
                </div>
            </div>
        </div>
        <div class="container container__profile">
            <div class="profile__active" id="profile">
                <form class="profile__form">
                    <div class="profile__form_col">
                        <div class="profile__title">Имя и фамилия:</div>
                        <p>Акакий Зирбишфыв</p>
                    </div>
                    <div class="profile__form_col">
                        <div class="profile__title">E-mail:</div>
                        <div class="profile__editing" hidden="">
                            <input value="akakiy_zir@vesteros.ru" type="email" placeholder="E-mail" />
                            <button type="submit">ок</button>
                        </div>
                        <div class="editing_parag">
                            <p>akakiy_zir@vesteros.ru</p>
                            <button class="btn_pen">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4.3L15.6 0L2.2 13.5C2.1 13.6 2 13.7 2 13.8L0 20L6.2 18C6.3 18 6.4 17.9 6.5 17.8L16.8 7.5L20 4.3ZM1.9 18.7L1.3 18L2.5 14.5L5.4 17.4L1.9 18.7Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="profile__form_col">
                        <div class="profile__title">Имя и фамилия:</div>
                        <div class="profile__editing" hidden="">
                            <input value="+79110010101" type="phone" placeholder="Телефон" />
                            <button type="submit">ок</button>
                        </div>
                        <div class="editing_parag">
                            <p>+79110010101</p>
                            <button class="btn_pen">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4.3L15.6 0L2.2 13.5C2.1 13.6 2 13.7 2 13.8L0 20L6.2 18C6.3 18 6.4 17.9 6.5 17.8L16.8 7.5L20 4.3ZM1.9 18.7L1.3 18L2.5 14.5L5.4 17.4L1.9 18.7Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="basket__wrapp" id="basket">
                <BasketItemsSet basketitems={basketitemsSet} />
            </div>
            <div id="deferred" class="">
                <div class="archive__journals">
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button>
                            <button class="btn btn-red add__product">Купить номер</button>
                        </div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button>
                            <button class="btn btn-red add__product">Купить номер</button>
                        </div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button>
                            <button class="btn btn-red add__product">Купить номер</button>
                        </div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button>
                            <button class="btn btn-red add__product">Купить номер</button>
                        </div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button>
                            <button class="btn btn-red add__product">Купить номер</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myJournals" class="">
                <div class="archive__journals">
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button><a class="btn btn-download" href="#">Скачать номер</a></div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button><a class="btn btn-download" href="#">Скачать номер</a></div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button><a class="btn btn-download" href="#">Скачать номер</a></div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button><a class="btn btn-download" href="#">Скачать номер</a></div>
                    </div>
                    <div class="archive__journal">
                        <div class="archive__journal_img"><img src="/static/img/journ6.png" /></div>
                        <div class="archive__journal_content">
                            <div class="archive__journal_data"><span>№145</span>04.19</div>
                            <button class="btn btn_more">Подробнее</button><a class="btn btn-download" href="#">Скачать номер</a></div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
}

export default ProfilePage;
