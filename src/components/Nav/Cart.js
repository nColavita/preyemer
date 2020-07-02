import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

export const StyledCart = styled(Link)`
    h4 {
        font-weight: 200;
    }
    span {
        font-weight: 700;
    }
`;

const Cart = () => {
    const { cart } = useContext(GlobalContext);
    return (
        <StyledCart to="/checkout">
            <h4>
                <span>cart </span>( {cart.length} )
            </h4>
        </StyledCart>
    );
};

export default Cart;
