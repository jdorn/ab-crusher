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

<style lang="less" scoped></style>
