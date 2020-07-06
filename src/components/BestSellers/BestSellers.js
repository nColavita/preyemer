import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

import { PRODUCTS as products } from "../../data";

import BestSeller from "./BestSeller";

const BestSellersContainer = styled.div`
    width: 100%;
    padding: 25px 50px;
    background-color: white;
    color: black;
    font-family: inherit;

    margin-top: 100px;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 200;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 50% 50%;
        gap: 25px;
        text-align: center;
        h1 {
            grid-column: 1 / 3;
        }
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
    }
`;

const BestSellers = () => {
    const { addProductHandler } = useContext(GlobalContext);

    return (
        <BestSellersContainer>
            <h1>Best Sellers!</h1>
            {products.map((product) => {
                if (product.bestseller) {
                    return (
                        <BestSeller
                            key={product.title}
                            product={product}
                            addProductHandler={addProductHandler}
                        />
                    );
                }
                return null;
            })}
        </BestSellersContainer>
    );
};

export default BestSellers;
