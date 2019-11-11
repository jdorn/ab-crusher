<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <h1>AB Tests Review</h1>
      </section>
      <template v-for="(test, i) in tests">
        <section :key="i + 'slide1'">
          <h3>{{ test.name }}</h3>
          <p>{{ test.hypothesis }}</p>
          <div class="variations">
            <div v-for="(variation, j) in test.variations" :key="j">
              <h4>{{ variation.name }}</h4>
              <img :src="variation.screenshot" />
            </div>
          </div>
        </section>
        <section :key="i + 'slide2'">
          <h3>{{ test.outcome }}</h3>
          <p>{{ test.results }}</p>
        </section>
      </template>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";

export default {
  data() {
    return {
      tests: [],
      hasData: false,
      initialized: false
    };
  },
  mounted() {
    const baseURI = process.env.VUE_APP_API_ENDPOINT + "/test/";
    const testIds = this.$route.query.testIds.split(",");
    let promises = [];
    testIds.forEach(id => {
      promises.push(this.$http.get(baseURI + id));
    });

    Promise.all(promises).then(results => {
      this.tests = results.map(result => {
        const test = result.data;
        return {
          name: test.name,
          outcome: test.results.outcome,
          hypothesis: test.hypothesis,
          results: test.results.summary,
          variations: test.variations.map(variation => {
            return {
              name: variation.name,
              screenshot: variation.images[0].path
            };
          })
        };
      });
      this.hasData = true;
    });
  },
  updated() {
    if (this.initialized) {
      return;
    }
    if (!this.hasData) {
      return;
    }

    Reveal.initialize();
    this.initialized = true;
  }
};
</script>

<style lang="less">
@import "../../node_modules/reveal.js/css/reveal.css";
@import "../../node_modules/reveal.js/css/theme/moon.css";

.variations {
  display: flex;
  margin-top: 20px;
}

p {
  font-size: 70%;
}
</style>
