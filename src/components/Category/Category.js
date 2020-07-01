import React from "react";
import styled from "styled-components";

import CategoryItems from "./CategoryItems";

const handleBGColor = (category) => {
    switch (category) {
        case "fashion":
            return "#94519A";
        case "nature":
            return "##519A51";
        case "patterns":
            return "##51849A";
        default:
            return "none";
    }
};

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Category = (props) => {
    return (
        <CategoryContainer>
            <CategoryItems category={props.category} />
        </CategoryContainer>
    );
};

export default Category;
