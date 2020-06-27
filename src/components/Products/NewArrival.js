import React from "react";
import styled from "styled-components";

const NewArrivalImageContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
`;
const NewArrivalImage = styled.img`
    width: 375px;
    height: 300px;
    object-fit: cover;
`;
const NewArrivalHoverBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.75);
`;
const NewArrivalHoverFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: white;
    color: black;
    padding: 10px;

    ul {
        text-align: right;
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
    div:nth-child(2) {
        right: 10px;
        top: 12px;
        position: absolute;
    }
`;

const NewArrival = (props) => {
    console.log(props.product.sizes);
    return (
        <NewArrivalImageContainer>
            <NewArrivalHoverBackground />
            <NewArrivalHoverFooter>
                <div>
                    <h1>{props.product.title}</h1>
                    <h2>
                        Created by: <span>{props.product.photographer}</span>
                    </h2>
                </div>
                <div>
                    <ul>
                        {props.product.sizes.map((size) => (
                            <li>
                                {size.size} - ${size.price}
                            </li>
                        ))}
                    </ul>
                </div>
            </NewArrivalHoverFooter>
            <NewArrivalImage src={`./${props.product.src}`}></NewArrivalImage>
        </NewArrivalImageContainer>
    );
};

export default NewArrival;
