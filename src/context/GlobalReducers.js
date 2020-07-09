export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                // cart: [action.payload, ...state.cart],
                cart:
                    state.cart.length > 0
                        ? state.cart.map((item) => {
                              console.log(item);
                              // If same item in cart was selected
                              if (item.id === action.payload.id) {
                                  // If same item & same size in cart was selected
                                  if (item.price === action.payload.price) {
                                      return {
                                          ...item,
                                          quantity: item.quantity + 1,
                                      };
                                  } else {
                                      return [action.payload, ...state.cart];
                                  }
                              } else {
                                  // Different item
                                  return [action.payload, ...state.cart];
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
