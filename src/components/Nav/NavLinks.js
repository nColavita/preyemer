import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLinks = styled.ul``;

const StyledNavLink = styled.li`
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1em;
`;

const StyledNavButton = styled(Link)`
    &:hover {
        color: #f8f873;
    }
`;

const NavLinks = () => {
    return (
        <StyledNavLinks>
            <StyledNavLink>
                <StyledNavButton to="">about us</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="">connect</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="">careers</StyledNavButton>
            </StyledNavLink>
        </StyledNavLinks>
    );
};

export default NavLinks;
