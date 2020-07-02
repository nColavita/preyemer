import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

import ShoppingCart from "./ShoppingCart";
import PayNow from "./PayNow";

const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 15px;
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
