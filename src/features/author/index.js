import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import { ParagraphStyled } from "./styled";

function Authors() {
    return (
        <Container>
            <Header
                title="About author"
            />
            <Section
                title="Seweryn Brzozowski"
                body={
                    <>
                        <ParagraphStyled>
                            <p>
                                Hello! My name is Seweryn Brzozowski, this year I am turning 30.📅😱<br />
                                I decided to change something in my life and I am trying my hand at programming. 💡📈👨‍💻
                            </p>
                            <p>
                                I have been interested in sports all my life. I have been training fencing for 19 years.
                                I am a member of the national team and represent Poland in international arenas. 🏅🤺
                            </p>

                        </ParagraphStyled>
                    </>
                }
            />
        </Container>
    );
};

export default Authors;