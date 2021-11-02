import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "../styling/Modal.css";

function Modal() {
	const [alert, setAlert] = useState("");
	const [displayModal, setDisplayModal] = useState(false);

	useEffect(() => {
		const clearMessage = setTimeout(() => {
			setAlert("");
		}, 5000);
		return () => clearTimeout(clearMessage);
	}, [alert]);

	return (
		<div className="App">
			<button
				className="Button CenterAlign"
				onClick={() => setDisplayModal(!displayModal)}
			>
				Settings
			</button>

			<div className={`Modal ${displayModal ? "Show" : ""}`}>
				<h3>Settings</h3>
				<button
					className="Close"
					onClick={() => setDisplayModal(!displayModal)}
				>
					X
				</button>
				<p className="HelpText">
					Note: these settings are saved in the browser only and can be lost
				</p>
				<button
					className="Button"
					onClick={() => setAlert("This is an alert!")}
				>
					Trigger alert
				</button>
			</div>
			<div
				className={`Overlay ${displayModal ? "Show" : ""}`}
				onClick={() => setDisplayModal(!displayModal)}
			/>
			<p className="Alert">{alert}</p>
		</div>
	);
}

export default Modal;
