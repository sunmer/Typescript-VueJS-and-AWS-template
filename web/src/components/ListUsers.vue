<template>
  <div class="list-users">
    <h3>List users component</h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{user}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
import { User } from "../types";


@Component({})
export default class ListUsers extends Vue {

  @State users: User[];
  @Action getUsers: Function;
  
  created() {
    this.getUsers();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
li {
  display: block;
  padding: 0;
}
</style>