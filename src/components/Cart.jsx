import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import ContextApi from '../ContextApi';
function Cart({ setList, buy }) {
	const { list, productsList, addProduct, totalPrice, delivery } =
		useContext(ContextApi);
	<div className="cart_totalPrice">total: {totalPrice}$</div>;
	let tempList = list
		.map((p) => p)
		.filter((value, index, array) => array.indexOf(value) === index);
	let total = totalPrice + delivery;
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Product</th>
						<th>Units</th>
						<th>Total for product</th>
					</tr>
					{tempList.map((id, index) => (
						<tr key={`${index}_${id}`}>
							<td>{productsList[id - 1].title}</td>
							<td>{list.filter((p) => p == id).length}</td>
							<td>
								{list.filter((p) => p == id).length *
									productsList[id - 1].price}
								$
							</td>
							<td>
								{' '}
								<Button
									style={{
										cursor: 'pointer',
									}}
									variant="primary"
									onClick={() =>
										addProduct(
											'add',
											id,
											productsList[id - 1].price
										)
									}
								>
									+
								</Button>
								<Button
									style={{
										cursor: 'pointer',
										display: list.includes(id)
											? 'inline'
											: 'none',
									}}
									variant="primary"
									onClick={() =>
										addProduct(
											'less',
											index,
											productsList[id - 1].title,
											id,
											productsList[id - 1].price
										)
									}
								>
									-
								</Button>
								<Button
									style={{
										cursor: 'pointer',
										display: list.includes(
											productsList[id - 1].id
										)
											? 'inline'
											: 'none',
									}}
									variant="primary"
									onClick={() =>
										addProduct(
											'delete',
											productsList[id - 1].id,
											productsList[id - 1].price
										)
									}
								>
									delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="cart_totalPrice">total: {total.toFixed(2)}$</div>
			<button style={{ display: list.length === 0 ? 'none' : 'inline' }}>
				BUY
			</button>
		</div>
	);
}

export default Cart;
