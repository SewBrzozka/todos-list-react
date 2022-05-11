import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 0 15px 15px;
    margin: 0;
`

export const Item = styled.li`
    list-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
    padding: 10px;
    display: flex;
    align-items: center;


    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const Content = styled.span`
    padding: 0 20px;
    flex-grow: 1;
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media  (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-left: 10px;
    padding-right: 10px;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 0px;
    border: none;
    transition: transform 0.3s;
    flex-shrink: 0;

    ${({ toggleDone }) => toggleDone && css`
    background-color: ${({ theme }) => theme.color.green};
    `}

    ${({ remove }) => remove && css` 
        background-color: ${({ theme }) => theme.color.red};
    `}

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1); 
    }

    &:active {
        filter: brightness(120%);
    }
`;