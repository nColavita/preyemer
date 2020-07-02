import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import { GlobalContext } from "../../context/GlobalContext";

import NewArrivalFooter from "./NewArrivalFooter";

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

    const { addProductToCart } = useContext(GlobalContext);

    const addProduct = (product, selectedSize, e) => {
        e.preventDefault();

        const productPayload = {
            title: product.title,
            size: selectedSize,
            image: product.src,
            price: product.sizes.find((size) => size.size === selectedSize)
                .price,
        };

        addProductToCart(productPayload);
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
                isOpen={isOpen}
                product={props.product}
                addProduct={addProduct}
            />
        </NewArrivalContainer>
    );
};

export default NewArrival;
