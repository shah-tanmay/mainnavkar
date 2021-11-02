import React from "react";
import "../styling/Buy.css";
import BillingDetails from "./BillingDetails";
import OrderDetails from "./OrderDetails";

function Buy() {
	return (
		<div className="buy ">
			<div className="buy-billing-details">
				<BillingDetails />
			</div>
			<div className="buy-order-details">
				<OrderDetails />
			</div>
		</div>
	);
}

export default Buy;
