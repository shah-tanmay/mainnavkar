import React from "react";
import "../styling/CartCard.css";
import { useStateValue } from "./StateProvider";

function CartCard({ image, title, price, id }) {
	const [{ cart, wishlist }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			image,
			title,
			id,
			price,
		});
	};
	return (
		<div className="cartcard">
			<div className="cartcard-left">
				<div className="cart-image">
					<img src={image} />
				</div>
			</div>
			<div className="cartcard-right">
				<div className="cart-description">
					<p>
						<strong>Description: </strong>
						{title}
					</p>
				</div>
				<div className="cart-price">
					<p>
						<strong>Price: </strong>
						<strong>₹</strong>
						{price}
					</p>
				</div>
				<div className="cart-button">
					<div>
						<a onClick={removeFromBasket} className="remove-from-cart">
							Remove
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartCard;
