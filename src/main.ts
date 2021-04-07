import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";


const app = createApp(App);

app.component("LottieAnimation", LottieAnimation);

app.use(router).mount("#app");
