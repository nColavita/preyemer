import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCart = styled(Link)`
    font-weight: 700;
`;

const Cart = () => {
    return (
        <StyledCart>
            <h4>cart (0)</h4>
        </StyledCart>
    );
};

export default Cart;
