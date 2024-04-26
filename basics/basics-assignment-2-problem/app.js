Vue.createApp({
  data() {
    return {
      output: "",
      entering: "",
      confirmed: "",
    };
  },
  methods: {
    showAlert() {
      alert("take care!");
    },
    showOutput(event) {
      this.output = event.target.value;
    },
    getEnter(event) {
      this.entering = event.target.value;
    },
    showEnter() {
      this.confirmed = this.entering;
    },
  },
}).mount("#assignment");
