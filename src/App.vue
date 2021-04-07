<template>
  <PreLoader v-if="showPreLoad" />
  <Navbar />
  <transition
    mode="in-out"
    enter-active-class="animate__animated animate__backInUp"
    leave-active-class="animate__animated animate__backInUp"
    appear
  >
    <router-view v-if="!showPreLoad" />
  </transition>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import PreLoader from "@/components/PreLoader.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  name: "App",
  components: {
    Navbar,
    PreLoader,
  },
})
export default class App extends Vue {
  showPreLoad = true;

  togglePreLoad() {
    setTimeout(() => {
      this.showPreLoad = false;
    }, 1500);
  }

  mounted() {
    this.togglePreLoad();
  }
}
</script>
<style lang="scss">
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Vazir";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 90%;
  margin: 0 auto;
}
body {
  background: #fcfcfc;
}
a {
  text-decoration: none;
}
</style>
