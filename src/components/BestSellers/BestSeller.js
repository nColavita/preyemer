import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import BestSellerContent from "./BestSellerContent";

const BestSellerContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    width: 180px;
    height: 150px;
    overflow: hidden;

    @media (max-width: 1000px) {
        margin: auto;
    }
`;

const BestSellerHoverContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 180px;
    height: 150px;

    background-color: rgba(0, 0, 0, 0.85);
`;

const BestSellerImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const BestSellerHoverFrame = styled(motion.div)`
    position: absolute;
    width: 160px;
    height: 135px;
    border: solid white 4px;
`;

// *** Logic *** //
const frameVariants = {
    closed: { scale: 0.5, opacity: 0 },
    open: { scale: 1, opacity: 1 },
};
const frameConentVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};
const scaleVariants = {
    closed: { scale: 1 },
    open: { scale: 1.2 },
};

const BestSeller = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <BestSellerContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
            onClick={() => toggleOpen()}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={scaleVariants}
            transition={{ ease: "easeInOut" }}
        >
            <BestSellerHoverContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={frameConentVariants}
            >
                <BestSellerHoverFrame
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={frameVariants}
                    transition={{ type: "tween", duration: 0.15, delay: 0.1 }}
                />
                <BestSellerContent
                    isOpen={isOpen}
                    variants={frameConentVariants}
                    product={props.product}
                    addProductHandler={props.addProductHandler}
                />
            </BestSellerHoverContainer>

            <BestSellerImg src={props.product.src}></BestSellerImg>
        </BestSellerContainer>
    );
};

export default BestSeller;
