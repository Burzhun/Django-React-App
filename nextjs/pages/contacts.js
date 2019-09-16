import React from 'react';
import Layout from '../components/Layout'

function ContactsPage() {
    return (
        <Layout>
            <div className="container container__confirmation_contacts container_mini">
                <div className="yasno__title">
                    <div className="yasno__title_prefix">Издательский дом</div>
                    <h1> «Ясно Publishing»</h1></div>
                <h5> Адрес и телефон</h5>
                <p>127018, Москва, ул. Полковая, 3, стр. 1</p>
                <p>+7 (495) 232-92-92 доб. 2000</p>
                <h5> РЕКВИЗИТЫ</h5>
                <p>ООО «Ясно Publishing»</p>
                <p>ОГРН 1157746144467</p>
                <p>ИНН/КПП 7704306823/771501001</p>
                <p>Название банка АО «Райффайзенбанк»</p>
                <p>БИК 044525700</p>
                <p>Р/счет 40702810100000003650</p>
                <p>К/счет 30101810200000000700</p>
            </div>
        </Layout>
    );
}

export default ContactsPage;
