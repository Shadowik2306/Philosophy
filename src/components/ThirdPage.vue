<template>
  <comparify class="bg-white h-64 w-full">
    <template v-slot:first>
      <h1>Hello World</h1>
    </template>
    <template v-slot:second>
      <h1>Hello Max</h1>
    </template>
  </comparify>
</template>

<script>
import Comparify from "@/components/comparify.vue";

export default {
  name: "ThirdPage",
  components: {Comparify}
}
</script>

<style scoped>

</style>