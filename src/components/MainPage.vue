<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item"><TitlePage/></div>
    <div class="item"><InfoPage/></div>
    <div class="item"><AtomPage/></div>
    <div class="item"><CavePage/></div>
    <div class="item"><RelativityPage/></div>
    <div class="item"><ArrowPage/></div>
    <div class="item"><LadderPage/></div>
  </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import TitlePage from "@/components/TitlePage.vue";
import AtomPage from "@/components/AtomPage.vue";
import CavePage from "@/components/CavePage.vue";
import RelativityPage from "@/components/RelativityPage.vue";
import ArrowPage from "@/components/ArrowPage.vue";
import LadderPage from "@/components/LadderPage.vue";
import InfoPage from "@/components/InfoPage.vue";
export default {
  name: "FullscreenVertical",
  components: {InfoPage, LadderPage, ArrowPage, RelativityPage, CavePage, AtomPage, TitlePage, VueScrollSnap}
};
</script>