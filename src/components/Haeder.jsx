import React, { useContext } from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import { MdPriceCheck } from 'react-icons/md';

import ContextApi from '../ContextApi';

function haeder({ totolPrice, setShow, show, list }) {
	return (
		<div className="haeder_container">
			<div className="haeder_icon" onClick={() => setShow(false)}>
				🏠 {}
			</div>

			<div>API- SHOP</div>
			<div className="haeder_icon" onClick={() => setShow(true)}>
				🛒 {totolPrice.toFixed(2)}$
			</div>
			<div className="haeder_icon" onClick={() => setShow(false)}>
				<MdDeliveryDining /> {list.length >= 4 ? '10$' : '5$'}
			</div>
		</div>
	);
}

export default haeder;
