import React from "react";
import styled from "styled-components";

import CategoryBG from "./CategoryBG";
import CategoryItems from "./CategoryItems";

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 100px;
`;

const Category = (props) => {
    return (
        <CategoryContainer>
            {/* <CategoryBG category={props.category} /> */}
            <CategoryItems category={props.category} />
        </CategoryContainer>
    );
};

export default Category;
