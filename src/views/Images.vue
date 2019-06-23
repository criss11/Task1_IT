<template>
  <div class="about">
    <h1>Images </h1>
    <b-loading :active.sync="getLoadingTaskData"></b-loading>
      <ul>
        <li v-for="(user, index) in getTaskData" :key="index">
            <img :src="user.url">
        </li>
      </ul>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex' 
export default {
  name: 'home',
  components: {
  },
  data() {
        return {
        }
  },
  computed: {
        ...mapGetters('taskModule', ['getTaskData', 'getLoadingTaskData'])
    },
    methods: {
        ...mapActions('taskModule', ['requestTaskData'])
    },
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestTaskData();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: disc;
}
</style>