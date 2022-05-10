import React, { useContext, useState } from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import { MdPriceCheck } from 'react-icons/md';

import ContextApi from '../ContextApi';
import Cart from './Cart';

function haeder({ totolPrice, list, setShow, show, delivery }) {
	return (
		<div className="haeder_container">
			<div className="haeder_icon" onClick={() => setShow(false)}>
				🏠
			</div>

			<div>API- SHOP</div>
			<div className="haeder_icon" onClick={() => setShow(true)}>
				🛒 {totolPrice.toFixed(2)}$
			</div>
			<div className="haeder_icon" onClick={() => setShow(false)}>
				<MdDeliveryDining /> {delivery}
			</div>
			<div
				style={{
					display:
						list.length == 0 && show == false ? 'none' : 'inline',
				}}
			>
				<button onClick={() => setShow(!show)}>
					{show ? 'close cart' : 'open cart'}
				</button>
			</div>
			<div style={{ display: show ? 'inline' : 'none' }}>
				<Cart />
			</div>
		</div>
	);
}

export default haeder;
