import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { User } from "../types";

Vue.use(Vuex);

interface State {
  user: User;
  users: User[];
}

const c = console;

const mutations: MutationTree<State> = {
  createUser(thisState, user) {
    axios.post("api/users", user)
    .then(response => {
      thisState.users.push(response.data.payload);
    })
    .catch(error => {
      c.log(error);
    });
  },
  getUsers(thisState) {
    axios.get("api/users")
    .then(response => {
      thisState.users = response.data.payload;
    })
    .catch(error => {
      c.log(error);
    });
  }
};

const actions: ActionTree<State, any> = {
  createUser(store: ActionContext<State, any>, user: any)  {
    store.commit("createUser", user);
  },
  getUsers(store: ActionContext<State, any>) {
    store.commit("getUsers");
  }
};

const getters: GetterTree<State, any> = {
  users(thisState) {
    return thisState.users;
  }
};

const state: State = {
  user: { name: "", email: "", password: "" },
  users: []
};

export default new Vuex.Store<State>({
  state,
  mutations,
  actions
});
