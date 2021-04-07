<template>
  <div class="home container">
    <header>
      <section class="header-text">
        <h1>یک مسافر در رویا،</h1>
        <h2>کاری از نیلوفر نادری</h2>
        <p>
          زمان به تنهای در اینجا، مفهومی بی‌معنیست! و پر‌بار ترین معنی در کاووش
          است. و پر‌خاطره ترین لحظات هم در تجربه پنهان است، پس بیا کشفش کنیم.
          <br />
          آری یکم عجیب است که نمیدانیم مسیر را درست رفتیم یا نه؟ اما فقط چشاتو
          باز بزار و از کل مسیر لذت ببر چون همینان که باعث میشه بیشتر نسبت به
          خودت حس خوبی داشته باشی و هدف این سفرم لذت و تجربه هست دیگر. پس بیا
          سخت نگیر و باهم لذت ببریم...
        </p>
      </section>
      <section class="header-image">
        <lottie-animation
          path="assets/travel.json"
          :loop="true"
          :autoPlay="true"
          :width="650"
          :height="600"
        />
      </section>
    </header>
    <section class="play-section">
      <div @click="navigateToVideo">
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
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  navigateToVideo(){
    this.$router.push('/video')
  }
}
</script>

<style lang="scss" scoped>
// #301b3f

header {
  margin: 5rem 0rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #333;

  .header-text {
    margin: -3.9rem 0rem 0rem;
    h1 {
      font-size: 4.3rem;
      font-weight: 800;
    }
    p {
      margin: 1.4rem 0rem 0rem;
      width: 480px;
      line-height: 2rem;
      text-align: justify;
    }
  }
  .header-image {
    transition: all .7s ease;
  }
}
.play-section {
  display: flex;
  justify-content: center;
  div {
    cursor: pointer;
    background-color: #301b3f;
    border-radius: 50%;
    display: flex;
    padding: 0.9rem;
    svg {
      width: 4.4rem;
      height: 4.4rem;
      color: #fff;
    }
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 #301b3fc7;
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px #301b3f27;
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 #301b3f27;
  }
}
</style>