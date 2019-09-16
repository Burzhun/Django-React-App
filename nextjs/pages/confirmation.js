import React from 'react';
import Layout from '../components/Layout'

function ConfirmationPage() {


  return ( 
    <Layout>
        <div class="container container__confirmation container_mini">
            <h3> Оплата прошла успешно!</h3>
            <p>Вы можете начать читать сейчас или позже. Журналы будут всегда доступны в вашем личном кабинете.</p>
            <div class="confirmation__page">
                <div class="item__journal">
                    <div class="item__journal_img"><img src="/static/img/journ6.png" /></div>
                    <div class="item__journal_content">
                        <div class="item__journal_title">National Geographic Россия</div>
                        <div class="item__journal_number_date"><span>№188</span> (Апрель 2019)</div>
                        <div class="btn">Скачать номер</div>
                    </div>
                    <div class="mobile_btn_bad_dis">
                        <div class="btn">Скачать номер</div>
                    </div>
                </div>
                <div class="item__journal">
                    <div class="item__journal_img"><img src="/static/img/journ6.png" /></div>
                    <div class="item__journal_content">
                        <div class="item__journal_title">National Geographic Россия</div>
                        <div class="item__journal_number_date"><span>№188</span> (Апрель 2019)</div>
                        <div class="btn">Скачать номер</div>
                    </div>
                    <div class="mobile_btn_bad_dis">
                        <div class="btn">Скачать номер</div>
                    </div>
                </div>
            </div>
            <a class="btn" href="#">Вернуться</a>
        </div>
    </Layout>
  );
}

export default ConfirmationPage;
