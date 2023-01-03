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

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find(
					(product) => product.id === Number(item)
				);
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const checkout = () => {
		setCartItems(getDefaultCartItems());
	};

	const contextValues = {
		cartItems,
		addItemToCart,
		updateCartItemCount,
		removeItemFromCart,
		getTotalCartAmount,
		checkout,
	};

	return (
		<ShopContext.Provider value={contextValues}>
			{props.children}
		</ShopContext.Provider>
	);
}

export default ShopContextProvider;
