import React from "react";
import "../styling/CollectionCard.css";

function CollectionCard({ image, title, subtitle }) {
	return (
		<div className="collection-card">
			<div className="collection-image">
				<img src={image} />
			</div>
			<div className="collection-title">
				<h2>{title}</h2>
			</div>
			<div className="collection-subtilte">
				<p>{subtitle}</p>
			</div>
		</div>
	);
}

export default CollectionCard;
