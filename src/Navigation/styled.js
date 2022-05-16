import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    &.active{
    font-weight: bold;
    }
    text-decoration: none;
    font-size: 1.2em;
    color: ${({ theme }) => theme.color.white};

    &:hover{
       border-bottom: 1px solid;
    }
`;

export const List = styled.ul`
    display: flex; 
    justify-content: center;
    background-color: ${({ theme }) => theme.color.teal};
    list-style: none;
    margin:  0;
    padding: 0;
`
export const Item = styled.li`
    padding: 30px;
`