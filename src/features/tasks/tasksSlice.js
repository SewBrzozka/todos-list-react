import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
        setAllDone: (state) => {
            for (const task of state.tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, setTasks, fetchExampleTasks } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export default tasksSlice.reducer;