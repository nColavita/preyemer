import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const staggerVariants = {
    closed: {
        y: "125px",
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
            ease: "easeInOut",
            duration: 0.6,
        },
    },
    open: {
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05,
            ease: "easeInOut",
            duration: 0.6,
        },
    },
};

const staggerVariants__2 = {
    closed: {
        y: "100px",
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
            ease: "easeInOut",
            duration: 0.35,
        },
    },
    open: {
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
            ease: "easeInOut",
            duration: 0.35,
        },
    },
};

const footerVariants = {
    closed: { y: "125px", transition: { duration: 0.45, delay: 0.2 } },
    open: {
        y: "0",
        transition: { ease: "easeInOut", duration: 0.45 },
    },
};

const StyledNewArrivalFooter = styled(motion.div)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: white;
    color: black;
    padding: 10px;

    ul {
        text-align: right;
        right: 10px;
        top: 12px;
        position: absolute;
    }

    li {
        list-style-type: none;
        margin: 5px 0;
        font-size: 0.95em;

        &:hover {
            color: #6636a8;
        }
    }

    h1 {
        font-size: 1.8em;
        font-weight: 200;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 0.75em;
        font-weight: 600;
    }
    h2 span {
        font-weight: 200;
        font-size: 1.35em;
    }
    div:nth-child(1) {
        padding-left: 10px;
        display: inline-block;
    }
`;

const NewArrivalFooter = (props) => {
    return (
        <StyledNewArrivalFooter
            initial={false}
            animate={props.isOpen ? "open" : "closed"}
            variants={footerVariants}
        >
            <motion.div
                initial={false}
                animate={props.isOpen ? "open" : "closed"}
                variants={staggerVariants__2}
            >
                <motion.h1 variants={staggerVariants__2}>
                    {props.product.title}
                </motion.h1>
                <motion.h2 variants={staggerVariants__2}>
                    Shot by: <span>{props.product.photographer}</span>
                </motion.h2>
            </motion.div>
            <motion.ul
                initial={false}
                animate={props.isOpen ? "open" : "closed"}
                variants={staggerVariants}
            >
                {props.product.sizes.map((item) => (
                    <motion.li
                        key={item.size}
                        variants={staggerVariants}
                        onClick={(e) =>
                            props.addProductHandler(props.product, item.size, e)
                        }
                    >
                        {item.size} - ${item.price}
                    </motion.li>
                ))}
            </motion.ul>
        </StyledNewArrivalFooter>
    );
};

export default NewArrivalFooter;
