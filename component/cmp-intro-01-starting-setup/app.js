const app = Vue.createApp({
  data() {
    return {
      detailsArevisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 5678 991",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggledetails">
        {{ detailsArevisible ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsArevisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
</li>
  `,
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
      detailsArevisible: false,
    };
  },
  methods: {
    toggledetails() {
      this.detailsArevisible = !this.detailsArevisible;
    },
  },
});
app.mount("#app");
