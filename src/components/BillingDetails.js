import axios from "axios";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import "../styling/BillingDetails.css";

function BillingDetails() {
	const [{ user }, dispatch] = useStateValue();
	const details = () => {
		const name = document.getElementById("name").value;
		const address = document.getElementById("address").value;
		const city = document.getElementById("city").value;
		const pincode = document.getElementById("pincode").value;
		const token = localStorage.getItem("token");
		axios
			.patch(
				"http://localhost:5000/users/me",

				{
					name,
					address,
					city,
					pincode,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => {
				if (res.status == 200) {
					dispatch({
						type: "SET_USER",
						user: {
							name,
							pincode,
							address,
							city,
						},
					});
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<div className="billing-details center">
			<div className="billing-deatils-heading">
				<p>Billing Details</p>
			</div>
			<div className="billing-details-form">
				<div className="form-name">
					<div className="name-text billing-form-text">Name</div>
					<div className="name-input ">
						<input
							type="text"
							id="name"
							placeholder="Name"
							className="billing-form-input"
						/>
					</div>
				</div>
				<div className="billing-details-address">
					<div className="address-text billing-form-text profile-address-title">
						Address
					</div>
					<div className="address-input">
						<input
							type="text"
							id="address"
							placeholder="Address"
							className="billing-form-input billing-address-input"
						/>
					</div>
				</div>
				<div className="billing-details-city">
					<div className="city-text billing-form-text">City</div>
					<div className="city-input">
						<input
							type="text"
							id="city"
							placeholder="City"
							className="billing-form-input"
						/>
					</div>
				</div>
				<div className="billing-details-pincode">
					<div className="pincode-text billing-form-text">Pincode</div>
					<div className="pincode-input">
						<input
							type="text"
							id="pincode"
							placeholder="Pincode"
							className="billing-form-input"
						/>
					</div>
				</div>
				<div className="submit-button">
					<button onClick={details}>Submit</button>
				</div>
			</div>
		</div>
	);
}

export default BillingDetails;
