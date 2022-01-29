import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;


    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }    
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    cursor: pointer;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;