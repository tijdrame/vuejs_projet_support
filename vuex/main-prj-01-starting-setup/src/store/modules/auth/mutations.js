export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  doAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
