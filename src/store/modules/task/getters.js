export default {
    getTaskData: (state) => {
        console.log(state.taskData);
        return state.taskData;
    },
    getLoadingTaskData: (state) => {
        return state.loadingTaskData;
    }
}