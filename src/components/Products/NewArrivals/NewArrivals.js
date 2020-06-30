import React from "react";
import styled from "styled-components";

import { PRODUCTS as products } from "../../../data";

import NewArrival from "./NewArrival";

const NewArrivalsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    width: 100%;
    margin: auto;
`;

const NewArrivals = () => {
    return (
        <NewArrivalsContainer>
            {products.map((product) => {
                if (product.newarrival) {
                    return <NewArrival key={product.title} product={product} />;
                }
            })}
        </NewArrivalsContainer>
    );
};

export default NewArrivals;
