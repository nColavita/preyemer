import React from "react";
import styled from "styled-components";

import PayNowForm from "./PayNowForm";

const PayNowContainer = styled.div`
    height: 550px;
    background-color: white;
    padding: 40px;
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

const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PayNow = (props) => {
    const getTotal = (items) => {
        let total = 0;

        items.map((item) => {
            return (total += item.quantity * item.price);
        });

        return total;
    };

    return (
        <PayNowContainer>
            <StyledTotal>
                <h2>total</h2>
                <h1>${getTotal(props.cart)}</h1>
            </StyledTotal>
            <hr />
            <h1
                style={{
                    fontWeight: "600",
                    margin: "25px 0",
                    fontSize: "1.35em",
                }}
            >
                Checkout
            </h1>
            <PayNowForm />
        </PayNowContainer>
    );
};

export default PayNow;
