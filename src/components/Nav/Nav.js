import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import Brand from "./Brand";
import Cart from "./Cart";

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = () => {
    return (
        <NavBar>
            <NavLinks />
            <Brand />
            <Cart />
        </NavBar>
    );
};

export default Nav;
