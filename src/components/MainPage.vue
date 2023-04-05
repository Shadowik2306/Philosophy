<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item"><FirstPage/></div>
    <div class="item"><SecondPage/></div>
    <div class="item"><ThirdPage/></div>
    <div class="item"><FourthPage/></div>
    <div class="item"><FifthPage/></div>
    <div class="item"><SixthPage/></div>
  </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import FirstPage from "@/components/FirstPage.vue";
import SecondPage from "@/components/SecondPage.vue";
import ThirdPage from "@/components/ThirdPage.vue";
import FourthPage from "@/components/FourthPage.vue";
import FifthPage from "@/components/FifthPage.vue";
import SixthPage from "@/components/SixthPage.vue";
export default {
  name: "FullscreenVertical",
  components: {SixthPage, FifthPage, FourthPage, ThirdPage, SecondPage, FirstPage, VueScrollSnap}
};
</script>