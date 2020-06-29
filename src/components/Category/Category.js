import React from "react";
import styled from "styled-components";

import CategoryItems from "./CategoryItems";

const CategoryContainer = styled.div`
    width: 100%;
`;

const Category = (props) => {
    return (
        <CategoryContainer>
            <CategoryItems />
        </CategoryContainer>
    );
};

export default Category;
