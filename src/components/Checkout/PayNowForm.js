import React from "react";
import styled from "styled-components";

const Form = styled.form`
    label {
        display: inline-block;
        margin: 15px 0;
        width: 100%;
        color: black;

        input {
            width: 85%;
            padding: 10px;
            border: none;
            border-bottom: solid black 1px;
            background-color: rgb(60, 0, 140, 0.15);
        }
        input:focus {
            outline-width: 0;
        }
    }
`;

const SubmitButton = styled.div`
    width: 100%;
    /* margin-top: 80px; */

    input[type="submit"] {
        cursor: pointer;
        width: 100%;
        border: 2px solid #4c266c;
        border-radius: 4px;
        font-weight: 600;
        font-size: 1.25em;
        background-color: white;
        padding: 10px 50px;
        margin-top: 10px;

        transition: all 0.5s;
    }

    input[type="submit"]:hover {
        color: white;
        background-color: #4c266c;
        border: 2px solid #4c266c;
    }
`;

const PayNowForm = (props) => {
    return (
        <>
            <Form>
                <label>
                    <input
                        type="text"
                        name="name"
                        id="fullname"
                        placeholder="Full Name"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="address1"
                        id="address1"
                        placeholder="Street, City, State"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="address2"
                        id="address2"
                        placeholder="Apt # / PO Box"
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="card"
                        id="card"
                        placeholder="Credit / Debit ...1234"
                    />
                </label>
            </Form>
            <SubmitButton>
                <input type="submit" value="Submit" />
            </SubmitButton>
        </>
    );
};

export default PayNowForm;
