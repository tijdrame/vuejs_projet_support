<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      chngesSaved: false,
    };
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //...
      this.$router.push('/teams');
    },
    saveChanges() {
      this.chngesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('Userlist cmp router');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Userlist cmp beforeRouteLeave');
    console.log(to, from);
    if (this.chngesSaved) next();
    else {
      const resp = confirm('Are you sure? You got unsaved changes');
      next(resp);
    }
  },
  unmounted() {
    console.log('Unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
