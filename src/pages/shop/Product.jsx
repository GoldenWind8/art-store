import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

function Product(props) {
	const { cartItems, addItemToCart } = useContext(ShopContext);
	const { id, productName, price, productImage } = props.data;

	const cartItemAmount = cartItems[id];
	return (
		<div className="product">
			<img src={productImage} alt={"zoomner"} />
			<div className="dedscription">
				<p>
					<b>{productName}</b>
				</p>
				<p> ${price}</p>
			</div>
			<button
				className={"addToCartBttn"}
				onClick={() => addItemToCart(id)}
			>
				Add to Cart{" "}
				{cartItemAmount > 0 ? <>({cartItemAmount})</> : null}
			</button>
		</div>
	);
}

export default Product;
