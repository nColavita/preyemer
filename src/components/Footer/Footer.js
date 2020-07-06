import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    width: 100%;
    margin: 125px auto 0px auto;
    background-color: white;
    color: black;
    padding: 25px;

    @media (max-width: 700px) {
        margin: 20px auto 0px auto;
    }
`;

const StyledFooterContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    max-width: 1366px;
    margin: auto;
    width: 100%;

    h3 {
        text-decoration: underline;
    }

    @media (max-width: 700px) {
        grid-template-columns: 50% 50%;
        margin: 20px auto 0px auto;
    }
`;

const FooterContent = styled.div`
    h3 {
        font-weight: 200;
    }

    ul li {
        cursor: pointer;
        list-style-type: none;
        font-size: 0.75em;
        font-weight: 600;
        margin: 15px 0;
    }

    @media (max-width: 700px) {
        h3 {
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContentContainer>
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
                <FooterContent>
                    <h3>Find us</h3>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </FooterContent>
            </StyledFooterContentContainer>
        </StyledFooter>
    );
};

export default Footer;
