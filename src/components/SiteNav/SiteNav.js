import React, { useState } from "react";
import styled from "styled-components";

import { StyledNavLinks, StyledNavButton } from "../styled/NavLinks";

const SiteNavListItem = styled.li`
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    margin: 0 35px;
    font-size: 1.2em;

    &:hover ${StyledNavButton} {
        color: ${(props) => props.color};
    }
`;

const SiteNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

const SiteNav = () => {
    return (
        <SiteNavContainer>
            <StyledNavLinks>
                <SiteNavListItem color={"#e086c8"}>
                    <StyledNavButton to="/category/fashion">
                        fashion
                    </StyledNavButton>
                </SiteNavListItem>
                <SiteNavListItem color={"#b5e69b"}>
                    <StyledNavButton to="/category/nature">
                        nature
                    </StyledNavButton>
                </SiteNavListItem>
                <SiteNavListItem color={"#9bd8e6"}>
                    <StyledNavButton to="/category/patterns">
                        patterns
                    </StyledNavButton>
                </SiteNavListItem>
            </StyledNavLinks>
        </SiteNavContainer>
    );
};

export default SiteNav;
