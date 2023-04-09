<template>
  <ComparifyInfo
      :text-first="'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>'"
      :text-second="'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>'"/>
</template>

<script>
import ComparifyInfo from "@/components/Comprarify/ComparifyInfo.vue";

export default {
  name: "InfoPage",
  components: {ComparifyInfo}
}
</script>

<style scoped>

</style>