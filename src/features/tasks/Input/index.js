import styled from "styled-components";

export default styled.input`
    align-self: flex-start;
    flex-grow: 2;
    padding: 10px;
    margin: 16px;
    border: 2px solid ${({ theme }) => theme.color.silver};

    &:hover {
    filter: brightness(110%);;
    }
`