import React from "react";
import styled from "styled-components";

import ShoppingCart from "./ShoppingCart";
import PayNow from "./PayNow";

const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 15px;
`;

const Checkout = () => {
    return (
        <CheckoutContainer>
            <ShoppingCart />
            <PayNow />
        </CheckoutContainer>
    );
};

export default Checkout;
