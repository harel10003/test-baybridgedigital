import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Context from './ContextApi';
import './App.css';
import Home from './pages/Home';

import Haeder from './components/Haeder';

function App() {
	const [productsList, setProductsList] = useState([]);
	useEffect(() => {
		setProductsList([]);
		// inputRef.current.focus();
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProductsList(json));
	}, []);

	const [list, setList] = useState([]);
	const [historyList, setHistoryList] = useState([]);
	const [show, setShow] = useState(false);
	const [totolPrice, setTotolPrice] = useState(0);
	const addProduct = (action, index, title, id, price) => {
		let newList = list;
		if (action == 'add') {
			setList([...list, id]);

			toPrice(price);
		} else if (action == 'less') {
			let indx;
			for (let i = 0; i < newList.length; i++)
				if (list[i] == id) {
					indx = i;
					break;
				}
			let tempLisat = newList.splice(indx, 1);
			setList([...newList]);
			toPrice(-price);
		} else if (action == 'delete') {
			let tempListProduct = productsList.filter((p) => p.id !== id);
			setProductsList([...tempListProduct]);
		}
	};

	let showMinus = (id) => {
		if (list.includes(id) === true) return 'inline';
		else return 'none';
	};
	const toPrice = (price) => {
		setTotolPrice(totolPrice + price);
	};
	const buy = () => {
		setShow(false);
		setHistoryList([
			...historyList,
			{ list: { ...list }, totolPrice: totolPrice },
		]);

		setList([]);
		setTotolPrice(0);
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
					totolPrice,
					setTotolPrice,
					addProduct,
					toPrice,
					buy,
					showMinus,
				}}
			>
				<Haeder
					totolPrice={totolPrice}
					setShow={setShow}
					show={show}
					list={list}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Context.Provider>
		</div>
	);
}

export default App;
