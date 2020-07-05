import React from "react";

import styled from "styled-components";

import { PRODUCTS as products } from "../../data";

import NewArrival from "./NewArrival";

const NewArrivalsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;

    width: 85%;
    margin: auto;
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const NewArrivals = () => {
    return (
        <NewArrivalsContainer>
            {products.map((product) => {
                if (product.newarrival) {
                    return <NewArrival key={product.title} product={product} />;
                }
                return null;
            })}
        </NewArrivalsContainer>
    );
};

export default NewArrivals;
