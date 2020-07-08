import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

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
    if (isMobile) {
        console.log("MOBILE");
    } else {
        console.log("DESKTOP");
    }
    return (
        <CategoryContainer>
            {/* <CategoryBG category={props.category} /> */}
            <CategoryItems category={props.category} isMobile={isMobile} />
        </CategoryContainer>
    );
};

export default Category;
