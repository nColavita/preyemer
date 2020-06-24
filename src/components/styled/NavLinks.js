import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLinks = styled.ul``;

export const StyledNavLink = styled.li`
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1em;
`;

export const StyledNavButton = styled(Link)`
    transition: color 0.25s ease-in-out;
`;
