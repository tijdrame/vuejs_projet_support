<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goal')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goal')">Manage Goals</button>
    <!--active-goal v-if="selectedComponent === 'active-goal'"></active-goal>
    <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal-->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
//import BadgeList from "./components/BadgeList.vue";
//import UserInfo from "./components/UserInfo.vue";
//import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";

export default {
  components: {
    "the-header": TheHeader,
    //BadgeList,
    //UserInfo,
    //CourseGoals,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
