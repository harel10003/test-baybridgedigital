import '../App.css';
function Cart({ totolPrice, list, setList, buy }) {
	// const [show, setShow] = useState(false);
	let tempList = list
		.map((p) => p.name)
		.filter((value, index, array) => array.indexOf(value) === index);
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>product</th>
						<th>units</th>
						<th>total for product</th>
					</tr>

					{tempList.map((name, index) => (
						<tr key={`${index}_${name}`}>
							<td>{name}</td>
							<td>
								{list.filter((p) => p.name === name).length}
							</td>
							<td>
								{list.filter((p) => p.name === name).length *
									list.find((p) => p.name === name).price}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="cart_totalPrice">total: {totolPrice}$</div>
			<button
				style={{ display: list.length === 0 ? 'none' : 'inline' }}
				onClick={() => {
					buy();
				}}
			>
				BUY
			</button>
		</div>
	);
}


import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import ContextApi from '../../ContextApi';

function product({ index, image, title, price, id, description }) {
    const {addProduct}= useContext(ContextApi); 
	return (
		<div>
			<Card>
				<Card.Img variant="top" src={image} width="80px" />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{price}$</Card.Text>
					<Button variant="primary" onClick={()=>addProduct(index)}>+</Button>
					<Button variant="primary">-</Button>
					<Button variant="primary">delete</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default product;


export default Cart;
