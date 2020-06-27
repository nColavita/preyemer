import React from "react";
import styled from "styled-components";

import { PRODUCTS as products } from "../data";

import NewArrival from "../components/Products/NewArrival";

const NewArrivalContainer = styled.div`
    width: 100%;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const HomePage = () => {
    return (
        <div>
            <NewArrivalContainer>
                {products.map((product) => {
                    console.log(product.category);
                    if (product.category === "New Arrival") {
                        return (
                            <NewArrival key={product.title} product={product} />
                        );
                    }
                })}
            </NewArrivalContainer>
        </div>
    );
};

export default HomePage;
