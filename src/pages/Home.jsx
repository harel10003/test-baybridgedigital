import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product/Product';
// import Products from '../components/Products';
import ContextApi from '../ContextApi';

function Home() {
	const nav = useNavigate();
	const { productsList, show, value1, value2 } = useContext(ContextApi);
	return (
		<div>
			<div style={{ display: show ? 'none' : 'inline' }}>
				{productsList.map(
					({ price, image, title, id, description }, index) => (
						<Product
							key={index}
							index={index}
							image={image}
							title={title}
							price={price}
							id={id}
							description={description}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Home;
