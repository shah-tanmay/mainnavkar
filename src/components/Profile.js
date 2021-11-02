import React, { useState } from "react";
import "../styling/Profile.css";
import { useStateValue } from "./StateProvider";

function Profile() {
	const [{ user }, dispatch] = useStateValue();
	const [isProfile, setIsProfile] = useState(true);
	const [isAddress, setIsAddress] = useState(false);
	return (
		<div className="profile">
			<div className="profile-left">
				<div>
					<li className="profile-list">
						<div className="profile-profile">
							<p
								className="profile-list-item"
								onClick={() => {
									setIsProfile(true);
									setIsAddress(false);
								}}
								style={{ cursor: "pointer" }}
							>
								My Profile
							</p>
						</div>
						<div
							className="profile-address"
							onClick={() => {
								setIsProfile(false);
								setIsAddress(true);
							}}
							style={{ cursor: "pointer" }}
						>
							<p className="profile-list-item">Address Book </p>
						</div>
						<div className="profile-order">
							<p className="profile-list-item">My Orders</p>
						</div>
					</li>
				</div>
			</div>
			<div className="profile-right">
				{isProfile && (
					<div>
						<div className="profile-info">
							<div className="profile-center">
								<div className="profile-title">
									<p>Your Profile Information</p>
								</div>
								<div className="profile-name">
									<div className="name">
										<div className="profile-name-text">Name:</div>
										<div className="profile-name-input">
											<input
												type="text"
												id="profile-name"
												className="profile-input"
												defaultValue={user.name}
											/>
										</div>
									</div>
								</div>
								<div className="profile-mobile">
									<div className="mobile">
										<div className="mobile-text">Mobile:</div>
										<div className="mobile-input">
											<input
												type="text"
												id="profile-mobile"
												className="profile-input"
											/>
										</div>
									</div>
								</div>
								<div className="save-changes-button">
									<button className="profile-button">Save Changes</button>
								</div>
							</div>
						</div>
						<div className="profile-password">
							<div className="profile-center">
								<div className="profile-title">Change Your Password</div>
								<div className="profile-password">
									<div className="password-new">
										<div className="profile-pass-text">New Password:</div>
										<div className="profile-pass-input">
											<input className="profile-input" id="new-pass" />
										</div>
									</div>
									<div className="password-confirm">
										<div className="profile-pass-text">Confirm Password:</div>
										<div className="profile-pass-input">
											<input className="profile-input" id="confirm-pass" />
										</div>
									</div>
									<div className="save-changes-button">
										<button className="profile-button">Save Changes</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{isAddress && (
					<div>
						<div className="change-address center profile-address">
							<div className="billing-details-address">
								<div className="address-text billing-form-text profile-address-title">
									Address
								</div>
								<div className="address-input profile-address-input">
									<input
										type="text"
										placeholder="Address"
										defaultValue={user.address}
										className="profile-input profile-address-input"
									/>
								</div>
								<div className="save-changes-button center">
									<button className="profile-button">Save Changes</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Profile;
