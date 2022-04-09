import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";

function Authors() {
    return (
        <Container>
            <Header
                title="About author"
            />
            <Section
                title="Seweryn Brzozowski"
                body={
                    <> Witam </>
                }
            />
        </Container>
    );
}

export default Authors;