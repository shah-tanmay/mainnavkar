import React from "react";
import CollectionCard from "./CollectionCard";
import "../styling/Collection.css";
import { Link } from "react-router-dom";

function Collection() {
	return (
		<div className="collection">
			<div className="collection-title">
				<h2>COLLECTION ADDICTION</h2>
			</div>
			<div className="collection-subtilte subheading">
				<p>A Handpicked Harmony For Each Room</p>
			</div>
			<div className="collection-cards">
				<CollectionCard
					image="https://ii1.pepperfry.com/media/wysiwyg/banners/ca_web_06042021_1.jpg"
					title="MAYUR"
					subtitle="Blue Pottery Tiles"
				/>
				<CollectionCard
					image="https://ii2.pepperfry.com/media/wysiwyg/banners/ca_web_06042021_2.jpg"
					title="ROMANIA"
					subtitle="Rounded Sillhouette"
				/>
				<CollectionCard
					image="https://ii3.pepperfry.com/media/wysiwyg/banners/ca_web_06042021_3.jpg"
					title="CARLESON"
					subtitle="Traditional Angled Louvres"
				/>
			</div>
		</div>
	);
}

export default Collection;
