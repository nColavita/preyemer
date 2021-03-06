import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import CategoryItemContent from "./CategoryItemContent";

const CategoryItemContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    width: 425px;
    height: 325px;
    overflow: hidden;

    @media (max-width: 700px) {
        width: 325px;
        height: 225px;
    }
`;

const CategoryImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 325px;

    /* background-color: darkmagenta; */
    background-image: url(${(props) => `${props.image}`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CategoryItemHoverBG = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 325px;
    background: rgba(0, 0, 0, 0.85);
`;

const scaleVariants = {
    closed: { scale: 1 },
    open: { scale: 1.05 },
    transition: { ease: "easeInOut" },
};
const showVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};
const staggerVariants = {
    closed: {
        y: "25px",
        opacity: 0,
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
            ease: "easeInOut",
        },
    },
    open: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.15, ease: "easeInOut" },
    },
};

const CategoryItem = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <CategoryItemContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
            onClick={() => toggleOpen()}
        >
            <CategoryImage
                image={props.product.src}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={scaleVariants}
                transition={{ duration: 0.5 }}
            />
            <CategoryItemHoverBG
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={showVariants}
            />
            <CategoryItemContent
                isOpen={isOpen}
                showVariants={showVariants}
                staggerVariants={staggerVariants}
                product={props.product}
                addProductHandler={props.addProductHandler}
            />
        </CategoryItemContainer>
    );
};

export default CategoryItem;
