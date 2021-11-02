import "./App.css";
import Header from "./components/Header";
import Field from "./components/Field";
import Slider from "./components/Slider";
import Brand from "./components/Brand";
import Collection from "./components/Collection";
import Trending from "./components/Trending";
import Embarace from "./components/Embarace";
import Beyou from "./components/Beyou";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Buy from "./components/Buy";
import Profile from "./components/Profile";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/profile">
						<Header />
						<Field />
						<Profile />
					</Route>
					<Route path="/buy">
						<Header />
						<Buy />
					</Route>
					<Route path="/product/:id">
						<Header />
						<Field />
						<Product />
					</Route>
					<Route path="/cart">
						<Header />
						<Field />
						<Cart />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Field />
						<Slider />
						<Brand />
						<Collection />
						<Embarace />
						<Trending />
						<Beyou />
						<Footer />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
