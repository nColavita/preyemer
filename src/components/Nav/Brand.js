import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBrand = styled(Link)`
    font-size: 2em;
`;

const Brand = () => {
    return <StyledBrand>preyemer</StyledBrand>;
};

export default Brand;
