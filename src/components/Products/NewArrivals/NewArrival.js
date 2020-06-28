import React, { useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

// *** STYLES *** //
const NewArrivalContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;

const NewArrivalImage = styled.img`
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

const NewArrivalBG = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.75);
`;

// *** Logic *** //
const footerVariants = {
    closed: { y: "200px" },
    open: { y: "-5px", delay: 0.25 },
};
const bgVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

// *** Component *** //
const NewArrival = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <NewArrivalContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
        >
            <NewArrivalBG
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={bgVariants}
            />
            <NewArrivalFooter
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={footerVariants}
            >
                <div>
                    <h1>{props.product.title}</h1>
                    <h2>
                        Shot by: <span>{props.product.photographer}</span>
                    </h2>
                </div>
                <ul>
                    {props.product.sizes.map((size) => (
                        <li>
                            {size.size} - ${size.price}
                        </li>
                    ))}
                </ul>
            </NewArrivalFooter>
            {/* <NewArrivalImage src={`./${props.product.src}`}></NewArrivalImage> */}
            <NewArrivalImage src={``}></NewArrivalImage>
        </NewArrivalContainer>
    );
};

export default NewArrival;
