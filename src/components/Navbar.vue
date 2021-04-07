<template>
  <div class="nav">
    <router-link to="/" class="nav-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </router-link>
    <router-link to="video" class="nav-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  background: #301b3f;
  direction: ltr;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0.3rem 0.4rem 0.6rem 0.2rem rgba($color: #301b3f, $alpha: 0.2);
  border-radius: 0rem 0rem 0.2rem 0.2rem;

  &-item {
    margin: 0rem 1rem -.3rem;
    font-size: 1.5rem;
    color: white;
    font-weight: 300;
    transition: all 0.5s ease;

    svg {
      width: 2.1rem;
      height: 2.1rem;
      fill: #301b3f;
    }

    &:first-child {
      margin-left: 0.1rem;
    }

    &:hover {
      opacity: 0.7;
      transform: scale(.9);
    }


  }
}
</style>
