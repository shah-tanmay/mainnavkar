export const initialState = {
	cart: [],
	wishlist: [],
	user: {
		username: "",
		address: "",
		city: "",
		pincode: "",
	},
	login: false,
};
export const getCartTotal = (cart) => {
	var total = 0;
	if (!cart.length == 0) {
		for (let i = 0; i < cart.length; i++) {
			total += cart[i].price;
		}
		return total;
	}
	return total;
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case "ADD_TO_WISHLIST":
			return {
				...state,
				wishlist: [...state.wishlist, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.cart.findIndex(
				(basketItem) => basketItem.id === action.id,
			);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in cart!`,
				);
			}
			return {
				...state,
				cart: newCart,
			};
		case "SET_LOGIN":
			return { ...state, login: action.login };
		case "SET_USER":
			return { ...state, user: action.user };
		case "SET_DETAILS":
			return { ...state, details: action.details };
		default:
			return state;
	}
};

export default reducer;
