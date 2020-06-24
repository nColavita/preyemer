import React from "react";
import styled, { css } from "styled-components";

import {
    StyledNavLinks,
    StyledNavLink,
    StyledNavButton,
} from "../styled/NavLinks";

const SiteNavLink = styled.li`
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    margin: 0 35px;
    font-size: 1.2em;

    ${(props) => {
        if (props.fashion) {
            return css`
                &:hover ${StyledNavButton} {
                    color: #e086c8;
                }
            `;
        }
        if (props.nature) {
            return css`
                &:hover ${StyledNavButton} {
                    color: #b5e69b;
                }
            `;
        }
        if (props.patterns) {
            return css`
                &:hover ${StyledNavButton} {
                    color: #9bd8e6;
                }
            `;
        }
    }}
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
                <SiteNavLink fashion>
                    <StyledNavButton to="/category/fashion">
                        fashion
                    </StyledNavButton>
                </SiteNavLink>
                <SiteNavLink nature>
                    <StyledNavButton to="/category/nature">
                        nature
                    </StyledNavButton>
                </SiteNavLink>
                <SiteNavLink patterns>
                    <StyledNavButton to="/category/patterns">
                        patterns
                    </StyledNavButton>
                </SiteNavLink>
            </StyledNavLinks>
        </SiteNavContainer>
    );
};

export default SiteNav;
