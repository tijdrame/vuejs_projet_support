<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: true,
      default: false, //peut aussi etre une func,
      /*validattor: function (value) {
        return value === "1" || value === "0";
      },*/
    },
  },
  emits: ["toggle-favorite", "delete"],
  /*emits: {
    "toggle-favorite": function (id) {
      if (id) return true;
      else {
        console.warn("Id is missing");
        return false;
      }
    },
  }*/
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //this.frienIsfavorite = !this.frienIsfavorite;
      this.$emit("toggle-favorite", this.id);
    },
    /*deleteFriend() {
      //le faire directement sur le html
      this.$emits('delete')
    },*/
  },
};
</script>
