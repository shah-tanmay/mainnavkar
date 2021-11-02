import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/Login.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";

function Login() {
	const [{ user, login }, dispatch] = useStateValue();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [counter, setCounter] = useState(180);
	const [password, setPassword] = useState("");
	const [toggle, setToggle] = useState(true);
	const [otp, setOtp] = useState("");
	const [isActive, setIsActive] = useState(false);
	const createAccount = (e) => {
		e.preventDefault();
		setIsActive(true);
		axios
			.post("http://localhost:5000/users", {
				email,
				password,
			})
			.then((res) => {
				console.log(res);
				if (res.status == 201) {
					const token = res.data.token;
					localStorage.setItem("token", token);
					setToggle(false);
				}
			});
	};
	const postOTP = (e) => {
		e.preventDefault();
		setIsActive(true);
		const token = localStorage.getItem("token");
		axios
			.post(
				"http://localhost:5000/users/verify",
				{
					otp,
				},

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => {
				if (res.status == 200) {
					history.push("/");
					dispatch({
						type: "SET_LOGIN",
						login: true,
					});
				}
			});
	};
	return (
		<div className="login">
			<div className="login__container">
				<h1>Sign-In</h1>
				<form>
					{toggle && (
						<div className="toggle-div">
							<h4>Email</h4>
							<input
								type="text"
								id="email"
								placeholder="Email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<h4>Password</h4>
							<input
								type="password"
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
					)}

					{toggle && (
						<button className="login__signInButton" type="submit">
							Sign In
						</button>
					)}
					{toggle && (
						<button
							className="login__registerButton"
							type="submit"
							onClick={createAccount}
						>
							Create an Account
						</button>
					)}
					{!toggle && (
						<div className="otp">
							<h4>Enter the OTP that has been send to your email</h4>
							<input
								type="input"
								className="otp_input"
								value={otp}
								onChange={(e) => {
									setOtp(e.target.value);
								}}
							/>
							<div className="submit-otp">
								<button className="login__registerButton" onClick={postOTP}>
									Submit
								</button>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}

export default Login;
