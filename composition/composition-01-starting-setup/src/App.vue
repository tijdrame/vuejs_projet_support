<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    //const uName = ref('Maximilian');
    const uAge = ref(31);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    provide('userAge', uAge);

    /*const user = reactive({
      name: 'Maximilian',
      age: 31,
    });*/
    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], (newValues, oldValues) => {
      console.log('newAge ' + newValues[0]);
      console.log('newName ' + newValues[1]);
      console.log('oldName ' + oldValues[1]);
    });

    function setNewAge() {
      uAge.value = 46;
    }

    function setLastName() {
      //avant now this.$refs n'est plus accessible
      //lastName.value = this.$refs.lastNameInput.value;
      lastName.value = lastNameInput.value.value;
    }

    return {
      firstName,
      lastNameInput,
      lastName,
      //user: user,
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      setLastName,
    };
  },
  /*data() {
    return {
      userName: 'Maximilian',
    };
  },*/
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
