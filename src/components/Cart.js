import React from "react";
import "../styling/Cart.css";
import CartCard from "./CartCard";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import Login from "./Login";

function Cart() {
	const [{ cart, wishlist, login }, dispatch] = useStateValue();
	const subtotal = getCartTotal(cart);
	return (
		<div className="cart">
			<div className="cart-top">
				<div className="cart-heading">
					<p className="cart-heading-text">
						{cart.length == 0 ? "Your Cart Is Empty" : "Your Cart"}
					</p>
				</div>

				{cart.length != 0 && (
					<div className="cart-proceed center">
						<Link
							to={login ? "/buy" : "/login"}
							style={{ textDecoration: "none" }}
						>
							<button className="checkout-button">Proceed to Checkout</button>
						</Link>
					</div>
				)}
			</div>
			<div className="flex">
				<div className="cart_left">
					<div className="cart-cards ">
						{cart.map((item) => (
							<CartCard
								title={item.title}
								image={item.image}
								id={item.id}
								price={item.price}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
