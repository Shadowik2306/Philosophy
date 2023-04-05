<template>
  <comparify class="bg-white h-64 w-full">
    <template v-slot:first>
      <div class="body">
        <h1 class="logo">{{ this.textFirst }}</h1>
      </div>
    </template>
    <template v-slot:second>
      <div class="body">
        <h1 class="logo">{{ this.textSecond }}</h1>
      </div>
    </template>
  </comparify>
</template>

<script>
import Comparify from "@/components/Comprarify/comparify.vue";

export default {
  name: "ComparifyTitle",
  components: {Comparify},
  props: {
    textFirst: {
      type: String,
      default: "Философия для физиков"
    },
    textSecond: {
      type: String,
      default: "Физика для философов"
    }
  }
}
</script>

<style scoped>
.body {
  height: 100%;
  position: relative }
.logo {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 90px;
  font-family: 'Montserrat Black';
}
</style>