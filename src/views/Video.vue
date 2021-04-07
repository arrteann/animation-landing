<template>
  <div class="video container">
    <div class="video-wrapper">
      <div class="video-container">
        <video
          src="/assets/animate.mp4"
          class="video-player"
          ref="videoControl"
          @click="toggleState"
          @timeupdate="checkTime()"
        ></video>
        <div class="video-progress">
          <div class="progress" ref="progress"></div>
        </div>
        <div class="video-controls" v-if="!play" @click="toggleState">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Video extends Vue {
  play = false;
  Controlvideo: HTMLElement | any;
  progress: HTMLElement | any;
  toggleState() {
    this.Controlvideo = this.$refs["videoControl"];
    if (this.Controlvideo.paused) {
      this.play = true;
      this.Controlvideo.play();
    } else {
      this.play = false;
      this.Controlvideo.pause();
    }
  }

  checkTime() {
    this.progress = this.$refs["progress"];
    const videoWith =
      this.Controlvideo.currentTime / this.Controlvideo.duration;
    this.progress.style.width = videoWith * 100 + "%";
  }
}
</script>

<style lang="scss" scoped>
.video‌ {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  align-items: center;
}
.video-wrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
}
.video-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
}
.video-player {
  width: 100%;
  margin-top: 70px;
  border-radius: 10px;
  box-shadow: 0px 3px 2px #301B3F56;
  position: relative;
}
.video-controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #301b3f;
  width: 10rem;
  height: 10rem;
  padding: 5px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.3) translate(-40%, -40%);
  }

  svg {
    color: white;
    width: 6rem;
    height: 6rem;
    margin: 0px 10px 0px 0px;
  }
}
.video-progress {
  width: 100%;
  height: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #301b3f70;
  direction: ltr;
  .progress {
    background: #301b3f;
    height: 10px;
    transition: all 0.9s ease;
  }
}
</style>