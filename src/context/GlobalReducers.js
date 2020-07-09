export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const foundIndex = state.cart.findIndex(
                (item) =>
                    item.size === action.payload.size &&
                    item.title === action.payload.title
            );
            if (foundIndex === -1) {
                // item wasn't found in cart
                return {
                    ...state,
                    cart: [action.payload, ...state.cart],
                };
            } else {
                // item and size was found in cart
                return {
                    ...state,
                    cart: state.cart.map((item, index) => {
                        if (index === foundIndex) {
                            // increment quantity on item found
                            return { ...item, quantity: item.quantity + 1 };
                        } else {
                            return item;
                        }
                    }),
                };
            }

        case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
