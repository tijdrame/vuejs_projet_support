Vue.createApp({
  data() {
    return {
      myName: "Tidiane",
      myAge: 15,
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    };
  },
  methods: {
    getNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
