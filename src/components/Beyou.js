import React from "react";
import "../styling/Beyou.css";
import BeyouCard from "./BeyouCard";

function Beyou() {
	return (
		<div className="beyou">
			<div className="beyou-title">
				<h1>BE YOU BUT NEW !!</h1>
			</div>
			<div className="beyou-subtitle subheading">
				<p>Decor That Gets Your Drift</p>
			</div>
			<div className="beyou-card-main">
				<div className="beyou-card">
					<BeyouCard
						image={
							"https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_06042021_1.jpg"
						}
						title={"Dress up Your Windows - Curtains"}
					/>
					<BeyouCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_06042021_2.jpg"
						}
						title={"Dine with Class- Tableware"}
					/>
					<BeyouCard
						image={
							"https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_06042021_3.jpg"
						}
						title={"Wall of Wonder-Wall Shelves"}
					/>
					<BeyouCard
						image={
							"https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_06042021_4.jpg"
						}
						title={"Blend of Style & Utility - Lamps"}
					/>
					<BeyouCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_06042021_5.jpg"
						}
						title={"Purest Thoughts -Mandirs"}
					/>
					<BeyouCard
						image={
							"https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_06042021_6.jpg"
						}
						title={"Light up your Heart - Hanging Lights"}
					/>
					<BeyouCard
						image={
							"https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_06042021_7.jpg"
						}
						title={"I Like what I see-Mirrors"}
					/>
					<BeyouCard
						image={
							"https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_06042021_8.jpg"
						}
						title={"Centre of Attraction- Carpets"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Beyou;
