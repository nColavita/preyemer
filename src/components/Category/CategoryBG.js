import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCategoryBG = styled(motion.div)`
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

const CategoryBG = (props) => {
    return (
        <StyledCategoryBG
            category={props.category}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
        />
    );
};

export default CategoryBG;
