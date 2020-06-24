import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledNavLinks = styled.ul``;

export const StyledNavLink = styled.li`
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1em;
`;

export const StyledNavButton = styled(Link)`
    &:hover {
        color: #f8f873;
    }
`;

export const StyledBrand = styled(Link)`
    font-size: 2em;
`;

export const StyledCart = styled(Link)`
    font-weight: 700;
`;
