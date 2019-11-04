<template>
  <div class="test-results">
    <h1>
      Results for Test <span>{{ id }}</span>
    </h1>
  </div>
</template>

<style lang="less" scoped>
h1 {
  span {
    color: #42b983;
  }
}
</style>

<script>
export default {
  data: () => {},
  props: ["id"]
};
</script>
