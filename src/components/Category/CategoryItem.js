import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

const CategoryItemContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    width: 450px;
    height: 350px;
    overflow: hidden;
`;

const CategoryImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 450px;
    height: 350px;

    /* background-color: darkmagenta; */
    background-image: url(${(props) => `../${props.image}`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CategoryItemHoverBG = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    background: rgba(0, 0, 0, 0.85);
`;

const CategoryItemContentContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 350px;
    color: white;
    font-weight: 200;
    padding: 25px;

    h1 {
        font-size: 3em;
        font-weight: 200;
    }

    h2 {
        font-size: 1em;
        font-weight: 200;
    }

    h2 span {
        font-size: 1.5em;
        font-weight: 600;
    }

    ul {
        width: 70%;
        margin: 55px 0;
    }

    li {
        list-style-type: none;
        font-size: 2em;
        &:hover {
            color: yellow;
        }
    }

    li span {
        font-weight: 600;
        margin-left: 15px;
    }
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
            isOpen={isOpen}
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
            positionTransition
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
            <CategoryItemContentContainer>
                <motion.h1
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={showVariants}
                >
                    {props.product.title}
                </motion.h1>
                <motion.ul
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={staggerVariants}
                >
                    {props.product.sizes.map((size) => {
                        return (
                            <motion.li
                                key={size.size}
                                variants={staggerVariants}
                            >
                                {size.size} <span>{size.price}</span>
                            </motion.li>
                        );
                    })}
                </motion.ul>
                <motion.h2
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={showVariants}
                >
                    shot by: <span>{props.product.photographer}</span>
                </motion.h2>
            </CategoryItemContentContainer>
        </CategoryItemContainer>
    );
};

export default CategoryItem;
