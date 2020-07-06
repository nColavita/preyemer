import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

// Styles //
const BrandLink = styled(Link)`
    font-size: 2.5em;
`;
const BrandText = withRouter(styled.span`
    color: ${(props) => {
        switch (props.location.pathname) {
            case "/category/fashion":
                return "#E086C8";
            case "/category/nature":
                return "#B5E69B";
            case "/category/patterns":
                return "#9BD8E6";
            case "/category/checkout":
                return "#6636A8";
            default:
                return "#F8F873";
        }
    }};

    transition: color 0.5s ease-in-out;
`);

const Brand = () => {
    return (
        <BrandLink to="/">
            pr<BrandText location="/">eye</BrandText>mer
        </BrandLink>
    );
};

export default Brand;
