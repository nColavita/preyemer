import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
    StyledNavLinks,
    StyledNavLink,
    StyledNavButton,
} from "../styled/NavLinks";

const NavLinks = () => {
    return (
        <StyledNavLinks>
            <StyledNavLink>
                <StyledNavButton to="/about-us">about us</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="/connect">connect</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink>
                <StyledNavButton to="/careers">careers</StyledNavButton>
            </StyledNavLink>
        </StyledNavLinks>
    );
};

export default NavLinks;
