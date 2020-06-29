import React from "react";
import styled from "styled-components";

import { PRODUCTS as products } from "../../data";

import CategoryItem from "./CategoryItem";

const CategoryItemsContainer = styled.div``;

const CategoryItems = (props) => {
    return (
        <CategoryItemsContainer>
            <CategoryItem products={products} />
        </CategoryItemsContainer>
    );
};

export default CategoryItems;
