import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ContextApi from '../../ContextApi';

function Product({ image, title, price, id, index }) {
	const { list, addProduct, showMinus } = useContext(ContextApi);
	let temp = list;
	const [show, setShow] = useState(false);

	return (
		<div>
			<Card>
				<Card.Img variant="top" src={image} width="80px" />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{price}$</Card.Text>

					<Button
						style={{
							cursor: 'pointer',
						}}
						variant="primary"
						onClick={() => addProduct('add', id, price)}
					>
						+
					</Button>

					<Button
						style={{
							cursor: 'pointer',
							display: list.includes(id) ? 'inline' : 'none',
						}}
						variant="primary"
						onClick={() => addProduct('less', id, price)}
					>
						-
					</Button>

					<Button
						style={{
							cursor: 'pointer',
							display: list.includes(id) ? 'inline' : 'none',
						}}
						variant="primary"
						onClick={() => addProduct('delete', id, price)}
					>
						delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
