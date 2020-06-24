import React from "react";

import { NavBar } from "../../styled/StyledNav";

import NavLinks from "./NavLinks";
import Brand from "./Brand";
import Cart from "./Cart";

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
