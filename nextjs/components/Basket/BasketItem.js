import React from 'react';


const BasketItem = function(props){
	

	return (
		<div class="item__journal">
			<button class="item__journal_remove"></button>
            <div class="item__journal_img"><img src={props.item.image_link} /></div>
            <div class="item__journal_content">
                <div class="item__journal_title">{props.item.title}</div>
                <div class="item__journal_number_date"><span>№188</span> {props.item.date}</div>
                <div class="item__journal_price">{props.item.price} ₽</div>
            </div>
        </div>
	)
}

export default BasketItem;