import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import Brand from "./Brand";
import Cart from "./Cart";

const NavBar = styled.nav`
    width: 100%;
    display: flex;

    @media (max-width: 1000px) {
        width: 85%;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${(props) => props.position};
    align-items: center;
`;

const Nav = () => {
    return (
        <NavBar>
            <FlexContainer position="flex-start">
                <NavLinks />
            </FlexContainer>
            <FlexContainer position="center">
                <Brand />
            </FlexContainer>
            <FlexContainer position="flex-end">
                <Cart />
            </FlexContainer>
        </NavBar>
    );
};

export default Nav;
