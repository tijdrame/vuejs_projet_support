export default {
  setAuth(state, payload) {
    //state.isLogin = payload.isLogin
    console.log(state, payload);
  },
  login(state) {
    state.isLogin = true;
    console.log(state.isLogin);
  },
  logout(state) {
    state.isLogin = false;
    console.log(state.isLogin);
  },
};
