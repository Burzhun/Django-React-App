import React from 'react';
import Layout from '../components/Layout';
import BasketItemsSet from '../components/Basket/BasketItemsSet';


function BasketPage() {
    const basketitemsSet=[{
        'id':1,'number':12,'date':'04.19','image_link':'http://google.com','title':'Magazine1','price':900
    }];

    return ( 
    <Layout>
        <div class="container container__basket">
            <h3> в корзине (<span class="basket__count">2</span>)</h3>
            <div class="basket__page basket__wrapp">
                <BasketItemsSet basketitems={basketitemsSet} />
            </div>
        </div>
    </Layout>
    );
}

export default BasketPage;
