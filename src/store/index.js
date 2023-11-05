import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://doctors.test/api";
export default createStore({
  state: {
    token: localStorage.getItem("token") || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            user: credentials.user,
            password: credentials.password,
          })
          .then((res) => {
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);

            // set token to state token
            context.commit("setToken", res.data.token);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      return new Promise((resolve, reject) => {
        axios
          .post("/logout")
          .then((res) => {
            localStorage.removeItem("token");
            context.commit("removeToken");
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
      // localStorage.removeItem('token');
    },
  },
  modules: {},
});
