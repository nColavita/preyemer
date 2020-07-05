import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    width: 100%;
    background-color: white;
    color: black;
    margin-top: 125px;
    padding: 35px 25px;

    display: grid;
    grid-template-columns: 200px 200px 200px auto 200px;
`;
const FooterContent = styled.div`
    h3 {
        font-weight: 200;
    }

    ul {
        text-align: left;
    }

    ul li {
        cursor: pointer;
        list-style-type: none;
        font-size: 0.75em;
        font-weight: 600;
        margin: 15px 0;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <h3>Customer service</h3>
                <ul>
                    <li>Returns</li>
                    <li>Help &amp; FAQs</li>
                    <li>Contact us</li>
                </ul>
            </FooterContent>
            <FooterContent>
                <h3>Get to know us</h3>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Vision</li>
                </ul>
            </FooterContent>
            <FooterContent>
                <h3>Company</h3>
                <ul>
                    <li>Press Center</li>
                    <li>Vision</li>
                    <li>Careers</li>
                </ul>
            </FooterContent>
            <FooterContent></FooterContent>
            <FooterContent>
                <h3>Find us</h3>
                <ul>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </FooterContent>
        </StyledFooter>
    );
};

export default Footer;
