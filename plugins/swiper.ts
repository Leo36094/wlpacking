// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  build: {
    transpile: ['swiper'];
  }
});
