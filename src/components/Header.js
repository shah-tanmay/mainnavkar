import React from "react";
import "../styling/Header.css";
import logo from "./logo.jpg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ cart, wishlist }, dispatch] = useStateValue();
	const StyledBadge = withStyles((theme) => ({
		badge: {
			right: 3,
			top: 1,
			border: `2px solid #000000`,
			padding: "0 2px",
			background_color: "#000000",
		},
	}))(Badge);
	return (
		<div className="outerdiv-header">
			<div className="header center">
				<Link to="/">
					<div className="header__logo center">
						<img src={logo} />
					</div>
				</Link>
				<div className="header__search center full">
					<input type="text" className="search-bar" placeholder="Search" />
				</div>
				<div className="header__details ">
					<div className="header__details__wishlist center-top">
						<div className="wishlist__logo">
							<FavoriteBorderIcon />
						</div>
						<div className="wishlist_text ">
							<p className="top">Wishlist</p>
						</div>
					</div>
					<div className="header__details__cart  ">
						<div className="cart__logo">
							<StyledBadge badgeContent={cart.length}>
								<ShoppingCartOutlinedIcon />
							</StyledBadge>
						</div>
						<Link
							to="/cart"
							style={{
								textDecoration: "none",
							}}
						>
							<div className="cart_text ">
								<p className="top">Cart</p>
							</div>
						</Link>
					</div>
					<Link to="/profile">
						<div className="header__details__profile ">
							<div className="profile__logo">
								<PersonOutlineOutlinedIcon />
							</div>
							<div className="profile_text">
								<p className="top">Profile</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
