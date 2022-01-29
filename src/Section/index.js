import { StyledSection, StyledHeader, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent}) => (
    <StyledSection>
        <StyledHeader>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;