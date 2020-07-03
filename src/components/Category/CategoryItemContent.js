import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

export const CategoryItemContent = (props) => {
    return (
        <CategoryItemContentContainer>
            <motion.h1
                initial={false}
                animate={props.isOpen ? "open" : "closed"}
                variants={props.showVariants}
            >
                {props.product.title}
            </motion.h1>
            <motion.ul
                initial={false}
                animate={props.isOpen ? "open" : "closed"}
                variants={props.staggerVariants}
            >
                {props.product.sizes.map((item) => {
                    return (
                        <motion.li
                            key={item.size}
                            variants={props.staggerVariants}
                            onClick={(e) =>
                                props.addProduct(props.product, item.size, e)
                            }
                        >
                            {item.size} <span>${item.price}</span>
                        </motion.li>
                    );
                })}
            </motion.ul>
            <motion.h2
                initial={false}
                animate={props.isOpen ? "open" : "closed"}
                variants={props.showVariants}
            >
                shot by: <span>{props.product.photographer}</span>
            </motion.h2>
        </CategoryItemContentContainer>
    );
};

export default CategoryItemContent;
