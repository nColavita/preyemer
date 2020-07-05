import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

import { PRODUCTS as products } from "../../data";

import CategoryItem from "./CategoryItem";

const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const CategoryItems = (props) => {
    const { addProductHandler } = useContext(GlobalContext);

    return (
        <CategoryItemsContainer>
            {products.map((product) => {
                if (props.category === product.category) {
                    return (
                        <CategoryItem
                            key={product.id}
                            product={product}
                            addProductHandler={addProductHandler}
                        />
                    );
                }
                return null;
            })}
        </CategoryItemsContainer>
    );
};

export default CategoryItems;
