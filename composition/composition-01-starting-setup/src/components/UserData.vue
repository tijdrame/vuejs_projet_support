<template>
  <h2 style="color: red">{{ userName }}</h2>
  <h3 style="color: red">{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  /*computed: {
    userName() {
      return this.firstName + ' ' + this.lastName;
    },
  },*/
  setup(props, context) {
    console.log(context);
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    const age = inject('userAge');
    onBeforeMount(() => console.log('onBeforeMount'));
    onMounted(() => console.log('onMounted'));
    onBeforeUpdate(() => console.log('onBeforeUpdate'));
    onUpdated(() => console.log('onUpdated'));
    onBeforeUnmount(() => console.log('onBeforeUnmount'));
    onUnmounted(() => console.log('onUnmounted'));
    return {
      userName: uName,
      age,
    };
  },
};
</script>
