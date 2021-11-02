import React from "react";
import "../styling/BrandCards.css";

function BrandCards({ image }) {
	return (
		<div className="cards">
			<div className="brand-cards">
				<div className="brand-trait">
					<p>
						<strong>Traits</strong>:- Contemporary, Clean, Functional
					</p>
				</div>
				<div className="brand-price">
					<p>
						<strong>Price</strong>:-₹199
					</p>
				</div>
				<div className="brand-image">
					<img src={image} className="small-brand-image" />
				</div>
				<div className="brand-description">
					<p>
						Our Contemporary Wooden Furniture Brand that offers Wide Furniture
						Choices.
					</p>
				</div>
			</div>
		</div>
	);
}

export default BrandCards;
