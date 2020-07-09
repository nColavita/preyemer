export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                // cart: [action.payload, ...state.cart],
                cart:
                    // Items in cart?
                    state.cart.length > 0
                        ? state.cart.map((item) => {
                              // If same item & size
                              if (
                                  item.title === action.payload.title &&
                                  item.size === action.payload.size
                              ) {
                                  return {
                                      ...item,
                                      quantity: item.quantity + 1,
                                  };
                              }
                          })
                        : // No items in cart state, add item.
                          [action.payload, ...state.cart],
            };
        case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
