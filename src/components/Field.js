import React, { useState } from "react";
import "../styling/Field.css";
import Furnishing from "./Furnishing";

function Field() {
	const [furniture, setIsFurniture] = useState(false);
	const onMouseOverFurnishing = () => {
		setIsFurniture(true);
	};
	const onMouseOutFurnising = () => {
		setIsFurniture(false);
	};
	return (
		<div className="field-main">
			<div className="field">
				<div className="field__attributes">
					<ul>
						<li
							id="furnishing"
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
						>
							Furnishing
						</li>
						{furniture && <Furnishing />}
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Mattresses
						</li>
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Bedroom
						</li>
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Living
						</li>
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Decor
						</li>
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Furniture
						</li>
						<li
							onMouseOver={onMouseOverFurnishing}
							onMouseOut={onMouseOutFurnising}
							style={{ cursor: "pointer" }}
						>
							Clearence Sale
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Field;
