import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Input = styled.input`
    align-self: flex-start;
    flex-grow: 2;
    padding: 10px;
    margin: 16px;
    border: 2px solid ${({ theme }) => theme.color.silver};

    &:hover {
    filter: brightness(110%);;
    }
`

export const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.color.teal};
    border: none;
    padding: 10px;
    align-self: center;
    cursor: pointer;
    margin: 10px 10px 10px 0px;
    transition: background-color 0.3s, transform 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin-top: 0px;
        margin: 0px 16px 16px 16px;
    }

    &:hover {
    filter: brightness(110%);
    transform: scale(1.1);

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        transform: scale(1.02);
    }
    }

    &:active {
    filter: brightness(120%);
    }
`;