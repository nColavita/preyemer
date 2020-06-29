import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

const BestSellerContainer = styled(motion.div)`
    cursor: pointer;
    position: relative;
    width: 200px;
    height: 200px;
    background-color: darkkhaki;
    overflow: hidden;
`;

const BestSellerHoverContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;

    background-color: rgba(0, 0, 0, 0.8);
`;

const BestSellerContent = styled(motion.div)`
    color: white;
    font-weight: 200;
    width: 180px;
    height: 180px;
    padding: 20px;
    position: relative;

    text-align: center;

    ul {
        text-align: left;
        list-style-type: none;
    }

    li {
        margin: 10px 0;
        font-size: 0.95em;
        font-weight: bold;
    }

    h1 {
        margin-bottom: 15px;
        font-size: 1.2em;
    }

    h2 {
        font-size: 0.75em;
        font-weight: 200;
        text-align: left;
        position: absolute;
        left: 20px;
        bottom: 15px;
    }
`;

const BestSellerImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const BestSellerHoverFrame = styled(motion.div)`
    position: absolute;
    width: 180px;
    height: 180px;
    border: solid white 5px;
`;

// *** Logic *** //
const frameVariants = {
    closed: { scale: 0.65, opacity: 0 },
    open: { scale: 1, opacity: 1 },
};
const frameConentVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

const BestSeller = (props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <BestSellerContainer
            onHoverStart={() => toggleOpen()}
            onHoverEnd={() => toggleOpen()}
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
                    transition={{ type: "tween", duration: 0.15, delay: 0.25 }}
                />
                <BestSellerContent
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={frameConentVariants}
                    transition={{ delay: 0.45 }}
                >
                    <h1>{props.product.title}</h1>
                    <ul>
                        {props.product.sizes.map((size) => {
                            return (
                                <li>
                                    {size.size} - ${size.price}
                                </li>
                            );
                        })}
                    </ul>
                    <h2>{props.product.photographer}</h2>
                </BestSellerContent>
            </BestSellerHoverContainer>

            <BestSellerImg src={``}></BestSellerImg>
            {/* <BestSellerImg src={`./${props.product.src}`}></BestSellerImg> */}
        </BestSellerContainer>
    );
};

export default BestSeller;
