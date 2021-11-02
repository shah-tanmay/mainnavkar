import React from "react";
import "../styling/ContactUs.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

function ContactUs() {
	return (
		<div className="contact">
			<h3>Contact Us</h3>
			<div className="contact__location">
				<div className="location__icon">
					<LocationOnIcon />
				</div>
				<div>
					<p>
						Shop No 18, Sadalaxmi Complex, Vitthal Rao Shivarkar Rd, Fatima
						Nagar, Parmar Nagar, Wanowrie, Pune, Maharashtra 411040
					</p>
				</div>
			</div>
			<div className="contact__email">
				<div className="email__icon">
					<MailOutlineIcon />
				</div>
				<div>
					<p>navkarmattresses@gmail.com</p>
				</div>
			</div>
			<div className="contact__phone">
				<div className="phone__icon">
					<PhoneIcon />
				</div>
				<div>
					<p>9373677952</p>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
