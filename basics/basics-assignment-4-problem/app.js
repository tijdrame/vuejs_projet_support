Vue.createApp({
  data() {
    return {
      userInput: "",
      maskOr: true,
      myBackground: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.maskOr,
        hidden: !this.maskOr,
      };
    },
  },
  methods: {
    showOrHide() {
      this.maskOr = !this.maskOr;
    },
  },
}).mount("#assignment");
