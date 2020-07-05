import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import { GlobalContext } from "../../context/GlobalContext";

import NewArrivalFooter from "./NewArrivalFooter";

const NewArrivalContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 280px;
`;

const NewArrivalImage = styled(motion.img)`
    width: 438px;
    height: 300px;
    object-fit: cover;
`;

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

const NewArrival = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const { addProductHandler, iconPath } = useContext(GlobalContext);

    return (
        <NewArrivalContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
        >
            <NewArrivalImage
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={imageVariants}
                src={props.product.src}
            ></NewArrivalImage>
            <NewArrivalFooter
                isOpen={isOpen}
                product={props.product}
                addProductHandler={addProductHandler}
            />
        </NewArrivalContainer>
    );
};

export default NewArrival;
