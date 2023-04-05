<template>
    <ComparifyMain
        :text-first="''"
        :text-second="''"
        :image-first="'logo.png'"
        :image-second="'logo.png'"/>
</template>

<script>
import ComparifyMain from "@/components/Comprarify/ComparifyMain.vue";

export default {
  name: "TemplatePage",
  components: {ComparifyMain}
}
</script>

<style scoped>

</style>