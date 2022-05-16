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
                    <> Nazywam się Seweryn Brzozowski  </>
                }
            />
        </Container>
    );
}

export default Authors;