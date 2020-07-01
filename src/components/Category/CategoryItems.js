import React from "react";
import styled from "styled-components";

import { PRODUCTS as products } from "../../data";

import CategoryItem from "./CategoryItem";

const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;

const CategoryItems = (props) => {
    return (
        <CategoryItemsContainer>
            {products.map((product) => {
                if (props.category === product.category) {
                    return <CategoryItem product={product} />;
                }
            })}
        </CategoryItemsContainer>
    );
};

export default CategoryItems;
