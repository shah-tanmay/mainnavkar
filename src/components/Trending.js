import React from "react";
import TrendingCard from "./TrendingCard";
import "../styling/Trending.css";

function Trending() {
	return (
		<div className="trending">
			<div className="trending-title">
				<h1>Trending</h1>
			</div>
			<div className="trending-subtitle subheading">
				<p>Work like a dream</p>
			</div>
			<div className="trending-cards">
				<TrendingCard
					image={
						"https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_23032021_1.jpg"
					}
					title={"Pillow Top Mattress"}
				/>
				<TrendingCard
					image={
						"https://ii3.pepperfry.com/media/wysiwyg/banners/tm_web_23032021_2.jpg"
					}
					title={"Orthopedic Mattress"}
				/>
				<TrendingCard
					image={
						"https://ii1.pepperfry.com/media/wysiwyg/banners/tm_web_23032021_3.jpg"
					}
					title={"Mattress in Box"}
				/>
				<TrendingCard
					image={
						"https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_23032021_4.jpg"
					}
					title={"Zero Partner Disturbance"}
				/>
			</div>
		</div>
	);
}

export default Trending;
