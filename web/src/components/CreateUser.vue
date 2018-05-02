<template>
  <div class="create-user">
    <h3>Create user component</h3>
    <form>
      <fieldset>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="name" v-model="user.name" />
      </fieldset>
      <fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="email" v-model="user.email" />
      </fieldset>
      <fieldset>
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="password" v-model="user.password" />
      </fieldset>
      <button @click.prevent="submit">Create user</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
import { User } from "../types";


@Component({})
export default class CreateUser extends Vue {

  @State user: User;
  @Action createUser: Function;

  submit() {
    this.createUser(this.user);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
fieldset {
  border: none;
  padding: 0;
  margin-bottom: 20px;
}
</style>