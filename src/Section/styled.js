import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 800px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 20px ${({ theme }) => theme.color.silver};
`

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
    padding: 15px;
    margin: 0px; 
 

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }    
`

export const Title = styled.h2`
    margin: 0;
`