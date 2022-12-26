import { createContext, useState } from "react";

import React from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCartItems = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

function ShopContextProvider(props) {
	const [cartItems, setCartItems] = useState(getDefaultCartItems());

	const addItemToCart = (id) => {
		setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
	};

	const removeItemFromCart = (id) => {
		setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
	};

	const contextValues = { cartItems, addItemToCart, removeItemFromCart };

	return (
		<ShopContext.Provider value={contextValues}>
			{props.children}
		</ShopContext.Provider>
	);
}

export default ShopContextProvider;
