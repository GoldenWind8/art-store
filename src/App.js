import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContextProvider";

function App() {
	return (
		<ShopContextProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
				</Routes>
			</Router>
		</ShopContextProvider>
	);
}

export default App;
