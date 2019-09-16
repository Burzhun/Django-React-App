import React from 'react';
import BasketItem from './BasketItem';
import Container from '../Container'


const BasketItemsSet = function(props){
	

	return (
		<Container>
	        <div class="basket__wrapp_left">
	            <div class="basket__chouse">
					{props.basketitems.map((basketitem, i) => {     
			           // Return the element. Also pass key     
			           return (<BasketItem key={basketitem.id} item={basketitem} />) 
			        })}
	    		</div>
	    	</div>	        
	        <div class="basket__wrapp_right">
	            <form class="basket__buy_form">
	                <p><span class="basket__count">2</span> товара на сумму</p>
	                <div class="basket__price_all-count">1998 ₽</div>
	                <div class="btn btn-red">Оплатить и скачать</div>
	                <p class="servise__terms"> Нажимая на кнопку, вы соглашаетесь с условиями обслуживания</p>
	            </form>
	        </div>
	    </Container>
	)
}

export default BasketItemsSet;