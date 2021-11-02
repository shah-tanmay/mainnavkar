import React from "react";
import "../styling/Footer.css";
import ContactUs from "./ContactUs";
import FooterCategories from "./FooterCategories";
import Newsletter from "./Newsletter";

function Footer() {
	return (
		<div className="footer">
			<ContactUs />
			<FooterCategories />
			<Newsletter />
		</div>
	);
}

export default Footer;
