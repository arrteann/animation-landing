<template>
  <div>
    <div class="blur">
      <lottie-animation
        path="assets/atom.json"
        :loop="true"
        :autoPlay="true"
        :width="310"
        :height="310"
        class="lottie-style animation-back"
      />
    </div>
    <lottie-animation
      path="assets/atom.json"
      :loop="true"
      :autoPlay="true"
      :width="310"
      :height="310"
      class="lottie-style animation-front"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "preloader",
})
export default class PreLoader extends Vue {}
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.blur {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 9999;
  filter: blur(5px);
  background: white;
}
.animation-front {
  top: 50%;
  left: 50%;
  z-index: 99999;
}
.animation-back {
  top: 0.8rem;
  left: 0;
  z-index: 99999;
}
.lottie-style {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
}
</style>