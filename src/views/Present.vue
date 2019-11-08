<template>
  <div class="reveal">
    <div class="slides">
      <template v-for="test in tests">
        <section :key="test.id + 'slide1'">
          {{ test.name }}
        </section>
        <section :key="test.id + 'slide2'">Slide 2</section>
      </template>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";

let isInitialized = false;

export default {
  data() {
    return {
      tests: []
    };
  },
  mounted() {
    const baseURI = "http://127.0.0.1:4010/tests";
    this.$http.get(baseURI).then(result => {
      this.tests = result.data;
    });
  },
  updated() {
    if (!isInitialized) {
      Reveal.initialize();
      isInitialized = true;
    }
  }
};
</script>

<style lang="less">
@import "../../node_modules/reveal.js/css/reveal.css";
@import "../../node_modules/reveal.js/css/theme/white.css";
</style>
