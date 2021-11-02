import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/Product.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product() {
	const { id } = useParams();
	const [{ cart, wishlist }, dispatch] = useStateValue();
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [discountedPrice, setDiscounterPrice] = useState("");
	const [originalPrice, setOriginalPrice] = useState("");
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: discountedPrice,
			},
		});
	};
	const savings = originalPrice - discountedPrice;
	const percentOff = Math.floor((savings / originalPrice) * 100);
	useEffect(() => {
		axios.get(`http://localhost:5000/product/${id}`).then((res) => {
			setTitle(res.data.title);
			setDiscounterPrice(res.data.discounted_price);
			setOriginalPrice(res.data.original_price);
			setImage(`http://localhost:5000/product/${id}/image`);
		});
	});
	return (
		<div className="product">
			<div className="product-left">
				<div className="product-image">
					<img src={image} loading="lazy" />
				</div>
			</div>
			<div className="product-right">
				<div className="product-title">
					<p>{title}</p>
				</div>
				<div className="product-price">
					<div className="discounted-price">
						<p>₹{discountedPrice}</p>
					</div>
					<div className="original-price">
						<p>
							<strike>₹{originalPrice}</strike>
						</p>
					</div>
				</div>
				<div className="product-savings">
					<p>
						Total Savings <span className="highlight">₹{savings}</span> (
						{percentOff}%off)
					</p>
				</div>
				<div className="product-quantity">
					<div className="quantity-dropdown">
						<label className="quantity">Quantity:</label>
						<input type="input" defaultValue="1" className="quantity-input" />
					</div>
					<div className="product-buttons">
						<div className="product-add-to-cart">
							<button className="add-to-cart" onClick={addToCart}>
								Add To Cart
							</button>
						</div>
						<div className="product-buy-now">
							<button className="buy-now">Buy Now</button>
						</div>
					</div>
				</div>
				<div className="product-details">
					<div className="details-subtitle">
						<p>Details: </p>
					</div>
					<div className="details-fields">
						<p>
							Brand: <span className="details-highlight">Mudramark</span>{" "}
						</p>
						<br />
						<p>
							Dimensions:{" "}
							<span className="details-highlight">
								MudramarkH : 33, W : 20, D : 21 (All Dimension in Inches)
							</span>
						</p>
						<br />
						<p>
							Weight: <span className="details-highlight">8.3 KG</span>
						</p>
						<br />
						<p>
							Warranty:{" "}
							<span className="details-highlight">36 Months' Warranty</span>
						</p>
						<br />
						<p>
							Assembly:{" "}
							<span className="details-highlight">No Assembly Required</span>
						</p>
						<br />
						<p>
							Primary Material:{" "}
							<span className="details-highlight">Sheesham Wood</span>
						</p>
						<br />
						<p>
							Room Type: <span className="details-highlight">Living Room</span>
						</p>
						<br />
						<p>
							Seating Height: <span className="details-highlight">14</span>
						</p>
						<br />
						<p>
							Product-id: <span className="details-highlight">23493949</span>
						</p>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
