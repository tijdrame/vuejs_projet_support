<template>
  <div>
    <active-user :name="userData.name" :age="userData.age"></active-user>
  </div>
  <div>
    <user-data
      :name="userData.name"
      :age="userData.age"
      @update-user="updateUser"
    ></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "Héléne",
        age: 30,
      },
    };
  },
  methods: {
    updateUser(username, userage) {
      this.userData.name = username;
      this.userData.age = +userage;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40 rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
