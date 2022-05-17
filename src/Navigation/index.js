import { toAuthor, toTasks } from "../routes"
import { Item, List, StyledNavLink } from "./styled"


const Navigation = () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>About Author</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};

export default Navigation;