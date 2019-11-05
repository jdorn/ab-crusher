<template>
  <div class="groups">
    <div v-if="status === 'STOPPED'" :class="['outcome', outcome]">
      <span :class="['dot', outcome]"></span>
      {{ outcome }}

      <div class="started-at">
        <span>{{ startedAt | moment("MMM D YYYY") }}</span>
      </div>
      <div class="runtime">
        Ran for {{ $moment(stoppedAt).diff(startedAt) | moment("D") }} days
      </div>
    </div>
    <div v-else :class="['status', status]">
      <span :class="['dot', status]"></span>
      {{ status }}
      <div v-if="status === 'RUNNING'">
        <div class="started-at">
          <span>{{ startedAt | moment("MMM D YYYY") }}</span>
        </div>
        <div class="runtime">
          Running for
          {{ $moment(stoppedAt).diff(startedAt) | moment("D") }} days
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Groups",
  props: [
  ]
};
</script>

<style lang="less" scoped>
</style>
