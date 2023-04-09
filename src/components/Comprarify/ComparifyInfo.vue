<template>
  <comparify class="bg-white h-64 w-full">
    <template v-slot:first>
      <div class="container">
        <div>
          <div class="text mostly-customized-scrollbar" v-html="textFirst"></div>
        </div>
      </div>
    </template>
    <template v-slot:second>
      <div class="container">
        <div>
          <div class="text mostly-customized-scrollbar" v-html="textSecond"></div>
        </div>
      </div>
    </template>
  </comparify>
</template>

<script>
import Comparify from "@/components/Comprarify/comparify.vue";

export default {
  name: "ComparifyInfo",
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
  padding-top: 2em;
}

.container div .text {
  background: rgba(0, 0, 0, 50%);
  font-family: "Montserrat Bold";
  width: 50em;
  line-height: 25px;
  padding: 1em;
  font-size: 20px;
  overflow: scroll;
  height: 800px;
}

.container div img {
  position: relative;
  top:50%;
}

.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #000; /* or add it to the track */
}

/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #FFF;
}

</style>