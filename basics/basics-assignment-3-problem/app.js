Vue.createApp({
  data() {
    return {
      result: 0,
      output: "",
    };
  },
  watch: {
    result(value) {
      console.log("test " + value);
      if (value < 37) this.output = "Not there yet";
      else if (value === 37) this.output = "OK";
      else {
        const that = this;
        this.output = "Too much!";
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },
  methods: {
    addFive() {
      return (this.result += 5);
    },
    addOne() {
      return (this.result += 1);
    },
  },
}).mount("#assignment");
