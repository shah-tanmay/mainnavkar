import React from "react";
import "../styling/BeyouCard.css";

function BeyouCard({ image, title }) {
	return (
		<div className="beyoucards">
			<div className="beyoucard-wrapper">
				<div className="beyoucards-image">
					<img src={image} />
				</div>
				<div className="beyoucards-title">
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default BeyouCard;
