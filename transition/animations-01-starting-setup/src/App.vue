<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  components: {
    //UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersArevisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    beforeLeave(el) {
      //ici on peut changer le style de l'element
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    showUsers() {
      this.usersArevisible = true;
    },
    hideUsers() {
      this.usersArevisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggeParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /*transform: translateX(-150px);*/
  animation: slide-scale 0.3s ease-out forwards;
}

.v-enter-active {
  /*transition: all 0.3s ease-out;*/
  animation: slide-scale 0.3s ease-out;
}
.v-enter-to {
  /*opacity: 1;
  transform: translateY(0);*/
}
.v-leave-from {
  /*opacity: 1;
  transform: translateY(0);*/
}
.v-leave-active {
  /*transition: all 0.3s ease-in;*/
  animation: slide-scale 0.3s ease-out;
}
.v-leave-to {
  /*opacity: 0;
  transform: translateY(30px);*/
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease;
}
.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-enter-to {
}
.route-enter-active {
  animation: slide-scale 0.4s ease-in;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(0);
  }
  70% {
    transform: translateX(-120) scale(1.1);
  }
  100% {
    transform: translateX(-150) scale(1);
  }
}
</style>
