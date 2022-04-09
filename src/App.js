import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Authors from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

export default () =>
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Tasks</Link>
                </li>
                <li>
                    <Link to="/autor">About Author</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/autor">
                    <Authors />
                </Route>
            </Switch>
        </nav>
    </HashRouter>;