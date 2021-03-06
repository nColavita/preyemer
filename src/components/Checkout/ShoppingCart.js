import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { GlobalContext } from "../../context/GlobalContext";

const ShoppingCartContainer = styled.div`
    background-color: white;
    max-height: 550px;
    padding: 25px 75px;
    color: black;
    overflow: auto;

    h1 {
        font-size: 2em;
        font-weight: 200;
        color: black;
    }

    table {
        width: 100%;
        margin-top: 25px;

        td {
            font-size: 0.9em;

            img {
                width: 75px;
                height: 75px;
                object-fit: cover;
            }
        }
    }

    th,
    td {
        text-align: center;
        padding: 10px 10px;
    }

    button {
        cursor: pointer;
        background-color: #c91313;
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 0;
        padding: 3px;
        text-decoration: none;
        width: 30px;
        height: 30px;
        font-size: 1.25em;
    }

    button:focus {
        outline: none;
    }

    thead tr {
        text-align: left;
    }

    @media (max-width: 1000px) {
        max-height: 450px;
        overflow: table {
            border-spacing: 0 25px;
        }
    }
`;

const NoItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const ShoppingCart = (props) => {
    const items = props.cart;
    const { removeProductfromCart } = useContext(GlobalContext);

    const deleteProductHandler = (id, e) => {
        e.preventDefault();

        removeProductfromCart(id);
    };

    return (
        <ShoppingCartContainer>
            {items.length > 0 ? (
                <>
                    <h1>Shopping List</h1>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.cart.map((item) => {
                                return (
                                    <tr key={Math.random()}>
                                        <td>
                                            <img src={`${item.image}`} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.size}</td>
                                        <td>${item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) =>
                                                    deleteProductHandler(
                                                        item.id,
                                                        e
                                                    )
                                                }
                                            >
                                                X
                                            </motion.button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <NoItems>
                    <h1>No Items in Cart</h1>
                </NoItems>
            )}
        </ShoppingCartContainer>
    );
};

export default ShoppingCart;
