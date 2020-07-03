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
    const { addProductToCart } = useContext(GlobalContext);

    const addProduct = (product, selectedSize, e) => {
        e.preventDefault();

        const productPayload = {
            title: product.title,
            size: selectedSize,
            image: product.src,
            price: product.sizes.find((size) => size.size === selectedSize)
                .price,
        };

        addProductToCart(productPayload);
    };

    return (
        <CategoryItemsContainer>
            {products.map((product) => {
                if (props.category === product.category) {
                    return (
                        <CategoryItem
                            key={product.id}
                            product={product}
                            addProduct={addProduct}
                        />
                    );
                }
                return null;
            })}
        </CategoryItemsContainer>
    );
};

export default CategoryItems;
