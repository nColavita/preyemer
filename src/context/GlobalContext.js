import React, { createContext, useReducer } from "react";
import ShoppingCartReducer from "./ShoppingCartReducer";

// Initial state
const initialState = {
    cart: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

    // Actions
    function addProductToCart(item) {
        dispatch({
            type: "ADD_TO_CART",
            payload: item,
        });
    }

    return (
        <GlobalContext.Provider value={{ cart: state.cart, addProductToCart }}>
            {children}
        </GlobalContext.Provider>
    );
};
