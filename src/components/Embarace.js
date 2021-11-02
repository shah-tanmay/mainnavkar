import React from "react";
import "../styling/Embrace.css";
import EmbraceCard from "./EmbraceCard";

function Embarace() {
	return (
		<div className="embrace">
			<div className="embrace-title">
				<h1>Embrace A New Style</h1>
			</div>
			<div className="embrace-subtitle subheading">
				<p>Furniture That Ups Your Style Quotient</p>
			</div>
			<div className="embrace-card-main">
				<div className="embrace-card">
					<EmbraceCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_1.jpg"
						}
						title={"WFH Collection"}
					/>
					<EmbraceCard
						image={
							"https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_2.jpg"
						}
						title={"Vintage Style Edits"}
					/>
					<EmbraceCard
						image={
							"https://ii3.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_3.jpg"
						}
						title={"Contemporar Cuts"}
					/>
					<EmbraceCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_4.jpg"
						}
						title={"Party Essentials"}
					/>
					<EmbraceCard
						image={
							"https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_5.jpg"
						}
						title={"Rustic Earthy Tones"}
					/>
					<EmbraceCard
						image={
							"https://ii3.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_6.jpg"
						}
						title={"Style Icons"}
					/>
					<EmbraceCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_7.jpg"
						}
						title={"Up The Glam Quotient"}
					/>
					<EmbraceCard
						image={
							"https://ii2.pepperfry.com/media/wysiwyg/banners/Tf_web_06042021_8.jpg"
						}
						title={"From Real to Reel Time"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Embarace;
