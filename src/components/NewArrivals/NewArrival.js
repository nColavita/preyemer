import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

// *** STYLES *** //
const NewArrivalContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: auto;
    height: 300px;
`;

const NewArrivalImage = styled(motion.img)`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const NewArrivalFooter = styled(motion.div)`
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

// *** Logic *** //
const footerVariants = {
    closed: { y: "125px", transition: { duration: 0.45, delay: 0.2 } },
    open: {
        y: "0",
        transition: { ease: "easeInOut", duration: 0.45 },
    },
};

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

const imageVariants = {
    open: {
        y: "-80px",
        transition: { ease: "easeInOut", duration: 0.5, delay: 0.1 },
    },
    closed: {
        y: "0",
        transition: { ease: "easeInOut", duration: 0.5 },
    },
};

// *** Component *** //
const NewArrival = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const addProduct = (e) => {
        e.preventDefault();

        console.log(e);
    };

    return (
        <NewArrivalContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
        >
            <NewArrivalImage
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={imageVariants}
                src={`./${props.product.src}`}
            ></NewArrivalImage>

            <NewArrivalFooter
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={footerVariants}
            >
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
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
                    animate={isOpen ? "open" : "closed"}
                    variants={staggerVariants}
                >
                    {props.product.sizes.map((size) => (
                        <motion.li
                            key={size.size}
                            variants={staggerVariants}
                            onClick={(e) => addProduct(e)}
                        >
                            {size.size} - ${size.price}
                        </motion.li>
                    ))}
                </motion.ul>
            </NewArrivalFooter>
        </NewArrivalContainer>
    );
};

export default NewArrival;
