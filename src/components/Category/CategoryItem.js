import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

const CategoryItemContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    width: 450px;
    height: 350px;
    overflow: hidden;

    /* background-color: darkmagenta; */
    background-image: url(${(props) => `../${props.image}`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CategoryItemImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
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
            font-weight: 600;
        }
    }

    li span {
        font-weight: 600;
        margin-left: 15px;
    }
`;

const showVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};
const staggerVariants = {
    closed: { y: "25px", opacity: 0 },
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
            image={props.product.src}
            isOpen={isOpen}
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
        >
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
                            <motion.li variants={staggerVariants}>
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
