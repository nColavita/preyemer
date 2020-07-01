import React from "react";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
    height: 100%;
    background-color: white;
    padding: 25px;

    h1 {
        font-size: 2em;
        font-weight: 200;
        color: black;
    }
`;

const ShoppingCart = () => {
    return (
        <ShoppingCartContainer>
            <h1>Shopping Cart</h1>
        </ShoppingCartContainer>
    );
};

export default ShoppingCart;
