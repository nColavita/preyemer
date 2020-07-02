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

    return (
        <GlobalContext.Provider value={{ cart: state.cart }}>
            {children}
        </GlobalContext.Provider>
    );
};
