import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledBestSellerContent = styled(motion.div)`
    color: white;
    font-weight: 200;
    width: 160px;
    height: 135px;
    padding: 10px;
    position: relative;

    text-align: center;

    ul {
        text-align: left;
        list-style-type: none;
        margin-left: 5px;
    }

    li {
        margin: 5px 0;
        font-size: 0.7em;
        font-weight: bold;

        &:hover {
            color: #6636a8;
        }
    }

    h1 {
        margin-bottom: 15px;
        font-size: 1em;
    }

    h2 {
        font-size: 0.7em;
        font-weight: 400;
        text-align: left;
        position: absolute;
        left: 15px;
        bottom: 15px;
    }
`;

const BestSellerContent = (props) => {
    return (
        <StyledBestSellerContent
            initial={false}
            animate={props.isOpen ? "open" : "closed"}
            variants={props.frameConentVariants}
            transition={{ delay: 0.15 }}
        >
            <h1>{props.product.title}</h1>
            <ul>
                {props.product.sizes.map((item) => {
                    return (
                        <li
                            onClick={(e) =>
                                props.addProduct(props.product, item.size, e)
                            }
                            key={item.size}
                        >
                            {item.size} - ${item.price}
                        </li>
                    );
                })}
            </ul>
            <h2>{props.product.photographer}</h2>
        </StyledBestSellerContent>
    );
};

export default BestSellerContent;
