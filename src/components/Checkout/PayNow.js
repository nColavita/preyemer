import React from "react";
import styled from "styled-components";

import PayNowForm from "./PayNowForm";

const PayNowContainer = styled.div`
    height: 550px;
    background-color: white;
    padding: 25px;
    color: black;

    h1 {
        font-size: 1.85em;
        font-weight: 200;
    }
    h2 {
        font-size: 1.2em;
        font-weight: 200;
    }
`;

const PayNow = (props) => {
    const amounts =
        props.cart.length > 0 ? props.cart.map((item) => item.price) : 0;
    const total =
        props.cart.length > 0
            ? amounts.reduce(
                  (total, amount) => parseInt(total) + parseInt(amount)
              )
            : 0;

    return (
        <PayNowContainer>
            <h2>total:</h2>
            <h1>${total}</h1>
            <hr />
            <PayNowForm />
        </PayNowContainer>
    );
};

export default PayNow;
