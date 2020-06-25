import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCart = styled(Link)`
    font-weight: 700;
`;

const Cart = () => {
    return (
        <StyledCart to="/checkout">
            <h4>
                <span>cart </span>(0)
            </h4>
        </StyledCart>
    );
};

export default Cart;