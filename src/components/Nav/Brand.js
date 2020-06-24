import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledBrand = styled(Link)`
    font-size: 2.5em;
    margin-left: -155px;
`;
const StyledBrandEye = withRouter(styled.span`
    color: ${(props) => {
        if (props.location.pathname === "/") {
            return "#F8F873";
        }
        if (props.location.pathname === "/category/fashion") {
            return "#E086C8";
        }
        if (props.location.pathname === "/category/nature") {
            return "#B5E69B";
        }
        if (props.location.pathname === "/category/patterns") {
            return "#9BD8E6";
        }
        if (props.location.pathname === "/checkout") {
            return "#6636A8";
        }
    }};

    transition: color 0.5s ease-in-out;
`);

const Brand = () => {
    return (
        <StyledBrand to="/">
            pr<StyledBrandEye location="/">eye</StyledBrandEye>mer
        </StyledBrand>
    );
};

export default Brand;
