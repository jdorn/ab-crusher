<template>
  <ul>
    <li
      class="test-list-variations"
      v-for="variation in variations"
      :value="variation.value"
      :key="variation.value"
    >
      {{ variation.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Groups",
  props: ["variations"]
};
</script>

<style lang="less" scoped>
ul {
  padding: 0 0 0 10px;
  margin: 0;

  li {
    padding: 0;
    margin: 0 0 5px 0;
  }
}
</style>
