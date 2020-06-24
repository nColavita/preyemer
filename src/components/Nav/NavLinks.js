import React from "react";

import {
    StyledNavLinks,
    StyledNavLink,
    StyledNavButton,
} from "../../styled/StyledNav";

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
