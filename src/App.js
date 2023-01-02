import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContextProvider";
import { Cart } from "./pages/cart/cart";

function App() {
	return (
		<ShopContextProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</ShopContextProvider>
	);
}

export default App;
