import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    requestTaskData: (context) => {
        if (context.state.taskData.length === 0) {
            console.log("request sent!");
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                context.commit("setTaskData", response.data.slice(0, 10));
            },
            error => {
                console.log(error);
            })
        }
    }
}
