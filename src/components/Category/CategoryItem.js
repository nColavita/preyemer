import React from "react";
import styled from "styled-components";

const CategoryItemContainer = styled.div`
    width: 490px;
    height: 358px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const CategoryItem = (props) => {
    return (
        <CategoryItemContainer>
            <h1>Image</h1>
            <h1>Image Title</h1>
            <img src="" alt="" />
        </CategoryItemContainer>
    );
};

export default CategoryItem;
