import React from "react";
import styled from "styled-components";

const Form = styled.form`
    label {
        display: inline-block;
        margin: 15px 0;
        width: 100%;
        color: black;

        h1 {
            font-size: 1em;
            font-weight: 600;
            margin-bottom: 15px;
        }

        input {
            padding: 5px;
            margin-left: 15px;
        }
    }

    input[type="submit"] {
        cursor: pointer;
        width: 100%;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
        background-color: white;
        padding: 12px 20px 12px 40px;
    }
`;

const PayNowForm = (props) => {
    return (
        <Form>
            <label>
                <h1>Name:</h1>
                <input type="text" name="name" id="" placeholder="First Name" />
            </label>
            <label>
                <h1>Address 1:</h1>

                <input
                    type="text"
                    name="address1"
                    id=""
                    placeholder="Address"
                />
            </label>
            <label>
                <h1>Address 2:</h1>
                <input type="text" name="address" id="" placeholder="Apt" />
            </label>
            <label>
                <h1>Card Information:</h1>
                <input
                    type="password"
                    name="card"
                    id=""
                    placeholder="...1234"
                />
            </label>

            <input type="submit" value="Submit" />
        </Form>
    );
};

export default PayNowForm;
