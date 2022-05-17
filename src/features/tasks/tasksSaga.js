import { call, put, takeLatest, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    };
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona!");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};