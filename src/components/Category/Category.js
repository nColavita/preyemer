import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CategoryItems from "./CategoryItems";

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const CategoryBG = styled(motion.div)`
    position: absolute;
    width: 75%;
    max-width: 800px;
    height: 100vh;
    background-color: ${({ category }) => {
        switch (category) {
            case "fashion":
                return "#94519A";
            case "nature":
                return "#519A51";
            case "patterns":
                return "#51849A";
            default:
                return "none";
        }
    }};
`;

const Category = (props) => {
    return (
        <CategoryContainer>
            <CategoryBG
                category={props.category}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
            />
            <CategoryItems category={props.category} />
        </CategoryContainer>
    );
};

export default Category;
