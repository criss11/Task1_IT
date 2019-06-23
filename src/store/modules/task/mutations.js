export default {
    setTaskData: (state, data) => {
        console.log(state.taskData);
        state.taskData = data;
        state.loadingTaskData = false;
    },
    delete: (state) => {
        state.taskData.pop();
    }
}