import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Context from './ContextApi';
import './App.css';
import Home from './pages/Home';

import Haeder from './components/Haeder';

function App() {
	const [productsList, setProductsList] = useState([]);
	const [list, setList] = useState([]);
	useEffect(() => {
		if (productsList.length === 0) {
			fetch('https://fakestoreapi.com/products')
				.then((res) => res.json())
				.then((json) => setProductsList(json));
		}
		// inputRef.current.focus();

		if (list.length >= 4) setDelivery(10);
		else if (list.length > 0) setDelivery(5);
		else setDelivery(0);

		/*to swap the cart and push */
	}, [list]);

	const [delivery, setDelivery] = useState(0);
	const [historyList, setHistoryList] = useState([]);
	const [show, setShow] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const addProduct = (action, id, price) => {
		let newList = list;
		if (action == 'add') {
			setList([...newList, id]);
			toPrice(price);
			/*to change in the db */
		} else if (action == 'less') {
			let indx;
			for (let i = 0; i < newList.length; i++)
				if (list[i] == id) {
					indx = i;
					break;
				}
			let tempList = newList.splice(indx, 1);
			setList([...newList]);
			toPrice(-price);
			/*to change in the db */
		} else if (action == 'delete') {
			let arr = newList;
			let priceDelete =
				productsList[id - 1].price * arr.filter((p) => p === id).length;
			let tempList = newList.filter((p) => p !== id);
			setList([...tempList]);
			toPrice(-priceDelete);

			/*to change in the db */
		}
	};

	let showMinus = (id) => {
		if (list.includes(id) === true) return 'inline';
		else return 'none';
	};
	const toPrice = (price) => {
		setTotalPrice(totalPrice + price);
	};
	const buy = () => {
		setShow(false);
		setHistoryList([
			...historyList,
			{ list: { ...list }, totolPrice: totalPrice },
		]);

		setList([]);
		setTotalPrice(0);
	};

	return (
		<div className="App">
			<Context.Provider
				value={{
					productsList,
					list,
					setList,
					historyList,
					setHistoryList,
					show,
					setShow,
					totalPrice,
					setTotalPrice,
					addProduct,
					toPrice,
					buy,
					showMinus,
					delivery,
				}}
			>
				<Haeder
					totolPrice={totalPrice}
					setShow={setShow}
					show={show}
					list={list}
					delivery={delivery}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Context.Provider>
		</div>
	);
}

export default App;
