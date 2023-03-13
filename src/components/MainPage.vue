<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item"><FirstPage/></div>
    <div class="item"><SecondPage/></div>
    <div class="item"><ThirdPage/></div>
  </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import FirstPage from "@/components/FirstPage.vue";
import SecondPage from "@/components/SecondPage.vue";
import ThirdPage from "@/components/ThirdPage.vue";
export default {
  name: "FullscreenVertical",
  components: {ThirdPage, SecondPage, FirstPage, VueScrollSnap}
};
</script>