import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { StyledNavLinks } from "../styled/NavLinks";

const SiteNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 25px 0 125px 0;

    @media (max-width: 700px) {
        margin: 25px 0 80px 0;
    }
`;

const SiteNavListItem = styled.li`
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    margin: 0 35px;
    font-size: 1.2em;

    @media (max-width: 700px) {
        margin: 0 10px;
    }
`;

const activeClassName = "active";

const SiteNavLink = styled(NavLink).attrs({ activeClassName })`
    transition: color 0.5s;
    padding-bottom: 4px;

    &.${activeClassName} {
        color: ${(props) => props.color};
        border-bottom: solid ${(props) => props.color} 1px;
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
