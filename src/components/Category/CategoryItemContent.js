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
        font-weight: 600;
    }

    h2 span {
        font-size: 1.5em;
        font-weight: 200;
    }

    ul {
        width: 70%;
        margin: 25px 0;
    }

    li {
        list-style-type: none;
        font-size: 2em;
        margin: 10px 0;
        &:hover {
            color: yellow;
        }
    }

    li span {
        font-weight: 600;
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1em;

            span {
                font-size: 1em;
                font-weight: 200;
                margin-left: 5px;
            }
        }
        ul {
            margin: 25px 0;
        }
        li {
            font-size: 1em;
            margin: 10px 0;
        }
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
                                props.addProductHandler(
                                    props.product,
                                    item.size,
                                    e
                                )
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
