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

    // ADD - Item
    function addProductToCart(item) {
        dispatch({
            type: "ADD_TO_CART",
            payload: item,
        });
    }

    const addProductHandler = (product, selectedSize, e) => {
        e.preventDefault();

        const productPayload = {
            id: Math.floor(Math.random() * 10000),
            title: product.title,
            size: selectedSize,
            image: product.src,
            price: product.sizes.find((size) => size.size === selectedSize)
                .price,
        };

        addProductToCart(productPayload);
    };

    // REMOVE - Item
    function removeProductfromCart(id) {
        dispatch({
            type: "DELETE_FROM_CART",
            payload: id,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                cart: state.cart,
                addProductHandler,
                removeProductfromCart,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
