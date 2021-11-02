import React from "react";
import "../styling/OrderDetails.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function OrderDetails() {
	const [{ cart, user }, dispatch] = useStateValue();
	const subtotal = getCartTotal(cart);
	return (
		<div className="order-details ">
			<div className="order-details-description ">
				<div className="order-details-header center">
					<p>Your order</p>
				</div>
				<div className="order-details-product flex">
					<div className="product-text">Product</div>
					<div className="product-name">Sofa x 1</div>
				</div>
				<div className="order-details-delivery flex">
					<div className="delivery-text">Delivery</div>
					<div className="delivery-name">FREE</div>
				</div>
				<div className="order-details-subtotal flex">
					<div className="subtotal-text">Subtotal</div>
					<div className="subtotal-name">₹{subtotal}</div>
				</div>
				<div className="order-details-total flex">
					<div className="total-text">Total</div>
					<div className="total-name">₹{subtotal}</div>
				</div>
				<div className="order-details-promocode">
					<div className="promocode-text billing-form-text">Promocode</div>
					<div className="promocode-input">
						<input
							type="text"
							placeholder="Promocode"
							className="billing-form-input"
						/>
					</div>
				</div>
				<div className="place-order center">
					<button className="place-order-button">Place Order</button>
				</div>
			</div>
		</div>
	);
}

export default OrderDetails;
