import React from "react";
import { Link } from "react-router-dom";
import "../styling/Brand.css";
import BrandCards from "./BrandCards";

function CardsBrand() {
	return (
		<div className="card-container">
			<div className="brand-title">
				<h2>BRANDS FOR NEW BEGININGS</h2>
			</div>
			<div className="brand-subtitle subheading">
				<p>Brands for all types</p>
			</div>
			<div className="brandcards">
				<div className="card-containers">
					<div>
						{" "}
						<BrandCards
							image="https://ii2.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_1.jpg"
							id={23493949}
						/>
					</div>
					<Link to="/product/230948" style={{ textDecoration: "none" }}>
						<div>
							<BrandCards image="https://ii1.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_2.jpg" />
						</div>
					</Link>
					<Link to="/product/23493949" style={{ textDecoration: "none" }}>
						<BrandCards image="https://ii3.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_3.jpg" />
					</Link>
					<div>
						{" "}
						<BrandCards image="https://ii2.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_4.jpg" />
					</div>
					<div>
						{" "}
						<BrandCards image="https://ii1.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_5.jpg" />
					</div>
					<div>
						{" "}
						<BrandCards image="https://ii3.pepperfry.com/media/wysiwyg/banners/gn_web_23032021_6.jpg" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardsBrand;
