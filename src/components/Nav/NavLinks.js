import React from "react";
import styled from "styled-components";

import {
    StyledNavLinks,
    StyledNavLink,
    StyledNavButton,
} from "../styled/NavLinks";

const NewStyledNavLinks = styled(StyledNavLinks)`
    @media (max-width: 1000px) {
        display: none;
    }
`;

const NavLinks = () => {
    return (
        <NewStyledNavLinks>
            <StyledNavLink>
                <StyledNavButton to="/about-us">about us</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="/connect">connect</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="/careers">careers</StyledNavButton>
            </StyledNavLink>
        </NewStyledNavLinks>
    );
};

export default NavLinks;
