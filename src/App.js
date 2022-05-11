import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Authors from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";

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
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <Authors />
                </Route>
            </Switch>
        </nav>
    </HashRouter>;