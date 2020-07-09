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

    const cartTotal = (items) => {
        let total = 0;

        items.map((item) => {
            total += item.quantity;
        });

        return total;
    };

    return (
        <StyledCart to="/checkout">
            <h4>
                <span>cart </span>( {cartTotal(cart)} )
            </h4>
        </StyledCart>
    );
};

export default Cart;
