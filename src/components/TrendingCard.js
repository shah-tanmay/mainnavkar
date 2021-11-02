import React from "react";
import "../styling/TrendingCard.css";

function TrendingCard({ image, title }) {
	return (
		<div className="trendingcards">
			<div className="trendingcard-image">
				<img src={image} />
			</div>
			<div className="trendingcard-title">
				<p>{title}</p>
			</div>
		</div>
	);
}

export default TrendingCard;
