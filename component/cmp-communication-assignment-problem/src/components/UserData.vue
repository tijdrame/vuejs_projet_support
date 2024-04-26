<template>
  <section>
    <h1>User Data</h1>
    <h2>Name:</h2>
    <input type="text" v-model="enteredName" />
    <h2>Age: {{ age }}</h2>
    <input type="number" v-model="enteredAge" />
    <button @click="updateUser">Update</button>
  </section>
</template>
<script>
export default {
  props: ["name", "age"],
  data() {
    return {
      enteredName: this.name,
      enteredAge: this.age,
    };
  },
  emits: ["update-user"],
  methods: {
    updateUser() {
      this.$emit("update-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
