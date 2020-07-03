import React, { createContext, useReducer } from "react";
import GlobalReducers from "./GlobalReducers";

// Initial state
const initialState = {
    cart: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducers, initialState);

    // Actions
    function addProductToCart(item) {
        dispatch({
            type: "ADD_TO_CART",
            payload: item,
        });
    }

    const addProductHandler = (product, selectedSize, e) => {
        e.preventDefault();

        const productPayload = {
            title: product.title,
            size: selectedSize,
            image: product.src,
            price: product.sizes.find((size) => size.size === selectedSize)
                .price,
        };

        addProductToCart(productPayload);
    };

    return (
        <GlobalContext.Provider value={{ cart: state.cart, addProductHandler }}>
            {children}
        </GlobalContext.Provider>
    );
};
