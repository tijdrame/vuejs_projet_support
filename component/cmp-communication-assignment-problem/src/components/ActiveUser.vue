<template>
  <section>
    <h1>Active user</h1>
    <h2>Username: {{ name }}</h2>
    <h2>Age: {{ age }}</h2>
  </section>
</template>
<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>
<style>
section {
  margin: 2rem auto;
  max-width: 40 rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
