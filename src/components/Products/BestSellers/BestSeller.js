import React from "react";
import styled from "styled-components";

const BestSellerContainer = styled.div`
    cursor: pointer;
    position: relative;
    width: 200px;
    height: 200px;
    background-color: mediumblue;
    overflow: hidden;
`;

const BestSellerHoverContainer = styled.div`
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

const BestSellerContent = styled.div`
    border: solid white 5px;
    color: white;
    font-weight: 200;
    width: 180px;
    height: 180px;
    padding: 5px;
    position: relative;

    text-align: center;

    ul {
        text-align: left;
        list-style-type: none;
        margin-left: 5px;
    }

    li {
        margin: 10px 0;
        font-size: 0.95em;
        font-weight: bold;
    }

    h1 {
        margin-bottom: 25px;
        font-size: 1.2em;
    }

    h2 {
        font-size: 0.75em;
        font-weight: 200;
        text-align: left;
        position: absolute;
        left: 10px;
        bottom: 10px;
    }
`;

const BestSellerImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const BestSeller = (props) => {
    return (
        <BestSellerContainer>
            <BestSellerHoverContainer>
                <BestSellerContent>
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
