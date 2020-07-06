import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

import ShoppingCart from "./ShoppingCart";
import PayNow from "./PayNow";

const CheckoutContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: auto;
    gap: 15px;

    @media (max-width: 1000px) {
        width: 85%;
        grid-template-columns: 1fr;
    }
`;

const Checkout = () => {
    const { cart } = useContext(GlobalContext);

    return (
        <CheckoutContainer>
            <ShoppingCart cart={cart} />
            <PayNow cart={cart} />
        </CheckoutContainer>
    );
};

export default Checkout;
