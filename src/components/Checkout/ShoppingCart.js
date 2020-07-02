import React from "react";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
    height: 100%;
    background-color: white;
    padding: 25px;
    color: black;

    h1 {
        font-size: 2em;
        font-weight: 200;
        color: black;
    }

    table {
        width: 100%;
        margin-top: 25px;

        td {
            text-align: center;

            img {
                width: 75px;
                height: 75px;
                object-fit: cover;
            }
        }
    }
`;

const ShoppingCart = (props) => {
    return (
        <ShoppingCartContainer>
            <h1>Shopping List</h1>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Size</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.map((item) => {
                        return (
                            <tr key={Math.random()}>
                                <td>
                                    <img src={`./${item.image}`} alt="" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.size}</td>
                                <td>${item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </ShoppingCartContainer>
    );
};

export default ShoppingCart;
