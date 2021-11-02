import React, { useState } from "react";
import "../styling/Newsletter.css";
import TelegramIcon from "@material-ui/icons/Telegram";

function Newsletter() {
	const [email, setEmail] = useState("");
	console.log(email);
	return (
		<div className="newsletter">
			<h3>Newsletter</h3>
			<div className="newsletter__text">
				<p>
					Subscribe to our newsletter to Get exclusive <br /> offers.
				</p>
			</div>
			<div className="newsletter__input">
				<input
					type="text"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div>
					<button type="submit" className="input__button">
						<TelegramIcon className="send" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
