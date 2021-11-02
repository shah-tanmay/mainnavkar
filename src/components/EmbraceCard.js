import React from "react";
import "../styling/EmbraceCard.css";

function EmbraceCard({ image, title }) {
	return (
		<div className="embraceCard">
			<div className="embraceCard-main">
				<div className="embraceCard-image">
					<img src={image} />
				</div>
				<div className="embraceCard-title">
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default EmbraceCard;
