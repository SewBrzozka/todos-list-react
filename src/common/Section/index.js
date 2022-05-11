import { StyledSection, StyledHeader, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </StyledHeader>
        <Body>
            {body}
        </Body>
    </StyledSection>
);

export default Section;