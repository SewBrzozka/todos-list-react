import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Authors from "./features/author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

export default () =>
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <Authors />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>

    </HashRouter>;