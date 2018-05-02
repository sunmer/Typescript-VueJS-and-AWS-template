import Vue from "vue";
import CreateUser from "./components/CreateUser.vue";
import ListUsers from "./components/ListUsers.vue";
import store from "./store/store";

Vue.config.productionTip = false;

const v = new Vue({
  store,
  el: "#app",
  template: `
    <div>
      <create-user />
      <list-users />
    </div>
  `,
  components: {
    CreateUser,
    ListUsers
  }
});
