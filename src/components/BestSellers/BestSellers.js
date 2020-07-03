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

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-weight: 200;
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
