<template>
  <comparify class="bg-white h-64 w-full">
    <template v-slot:first>
      <div class="container">
        <div>
          <p class="text">
          {{ this.textFirst }}
          </p>
        </div>
        <div>
          <img :src="require('@/assets/' + imageFirst)">
        </div>
      </div>
    </template>
    <template v-slot:second>
      <div class="container">
        <div>
          <img :src="require('@/assets/' + imageSecond)">
        </div>
        <div>
          <p class="text">
            {{ this.textSecond }}
          </p>
        </div>
      </div>
    </template>
  </comparify>
</template>

<script>
import Comparify from "@/components/Comprarify/comparify.vue";

export default {
  name: "ComparifyMain",
  components: {Comparify},
  props: {
    textFirst: {
      type: String,
      default: "Философия для физиков"
    },
    textSecond: {
      type: String,
      default: "Физика для философов"
    },
    imageFirst: {
      type: String,
      default: "@/assets/logo.png"
    },
    imageSecond: {
      type: String,
      default: "@/assets/logo.png"
    },
  },
  mounted() {
    console.log(this.imageFirst)
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;

    box-sizing: border-box;
  }

  .container div {
    width: fit-content;
  }

  .container div .text {
    background: rgba(0, 0, 0, 50%);
    font-family: "Montserrat Bold";
    width: 60em;
    line-height: 20px;
    padding: 2em;
    font-size: 20px;
  }

  .container div img {
    position: relative;
    top:50%;
  }

</style>