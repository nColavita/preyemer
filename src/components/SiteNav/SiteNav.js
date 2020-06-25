import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { StyledNavLinks, StyledNavButton } from "../styled/NavLinks";

const SiteNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

const SiteNavListItem = styled.li`
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    margin: 0 35px;
    font-size: 1.2em;
`;

const activeClassName = "active";

const SiteNavLink = styled(NavLink).attrs({ activeClassName })`
    transition: color 0.5s;

    &.${activeClassName} {
        color: ${(props) => props.color};
    }
    &.hover {
        color: ${(props) => props.color};
    }
`;

const SiteNav = () => {
    return (
        <SiteNavContainer>
            <StyledNavLinks>
                <SiteNavListItem>
                    <SiteNavLink color={"#e086c8"} to="/category/fashion">
                        fashion
                    </SiteNavLink>
                </SiteNavListItem>
                <SiteNavListItem>
                    <SiteNavLink color={"#b5e69b"} to="/category/nature">
                        nature
                    </SiteNavLink>
                </SiteNavListItem>
                <SiteNavListItem>
                    <SiteNavLink color={"#9bd8e6"} to="/category/patterns">
                        patterns
                    </SiteNavLink>
                </SiteNavListItem>
            </StyledNavLinks>
        </SiteNavContainer>
    );
};

export default SiteNav;
