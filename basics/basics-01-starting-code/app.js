const app = Vue.createApp({
  data() {
    return {
      courceGoalA: "Finish the course and learn Vue!",
      courceGoalB: "Master Vue and built amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courceGoalA;
      } else {
        return this.courceGoalB;
      }
    },
  },
});
app.mount("#user-goal");
