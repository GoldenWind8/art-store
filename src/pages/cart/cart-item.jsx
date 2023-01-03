import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

export const CartItem = (props) => {
	const { id, productName, price, productImage } = props.data;
	const {
		cartItems,
		addItemToCart,
		removeItemFromCart,
		updateCartItemCount,
	} = useContext(ShopContext);

	return (
		<div className="cartItem">
			<img src={productImage} alt={"Painting source"} />
			<div className="description">
				<p>
					<b>{productName}</b>
				</p>
				<p> Price: ${price}</p>
				<div className="countHandler">
					<button onClick={() => removeItemFromCart(id)}>
						{" "}
						-{" "}
					</button>
					<input
						value={cartItems[id]}
						onChange={(e) =>
							updateCartItemCount(
								Number(e.target.value),
								id
							)
						}
					/>
					<button onClick={() => addItemToCart(id)}> + </button>
				</div>
			</div>
		</div>
	);
};
