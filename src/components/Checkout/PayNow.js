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

const PayNow = () => {
    return (
        <PayNowContainer>
            <h2>cart total:</h2>
            <h1>$185.99</h1>
            <hr />
            <PayNowForm />
        </PayNowContainer>
    );
};

export default PayNow;
