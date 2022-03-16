import { call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona!");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};