import React from "react";
import styled from "styled-components";

const Form = styled.form`
    margin: 15px 0;
    label {
        display: inline-block;
        margin: 15px 0;
        width: 100%;
        color: black;

        input {
            width: 85%;
            padding: 5px;
            border: none;
            border-bottom: solid black 1px;
        }
        input:focus {
            outline-width: 0;
        }
    }
`;

const SubmitButton = styled.div`
    width: 100%;
    margin-top: 100px;

    input[type="submit"] {
        cursor: pointer;
        width: 100%;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 1em;
        background-color: white;
        padding: 12px 20px 12px 40px;
        margin-top: 10px;
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
