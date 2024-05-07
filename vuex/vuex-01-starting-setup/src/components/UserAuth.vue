<template>
  <button @click="loginAction" v-if="!isAuth">Login</button>
  <button @click="logoutAction" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['loginAction', 'logoutAction']),
  },
  computed: {
    ...mapGetters(['userIsLogin']),
    isAuth() {
      return this.userIsLogin;
      //return this.$store.getters.userIsLogin;
    },
  },
};
</script>
