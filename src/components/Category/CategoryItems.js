import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../context/GlobalContext";

import { PRODUCTS as products } from "../../data";

import CategoryItem from "./CategoryItem";

const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
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
