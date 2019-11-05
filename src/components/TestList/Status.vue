<template>
  <div class="test-status">
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
        <div  class="runtime">
          Running for {{ $moment(stoppedAt).diff(startedAt) | moment("D") }} days
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestStatus",
  props: [
    "status",
    "outcome",
    "createdAt",
    "updatedAt",
    "startedAt",
    "stoppedAt"
  ]
};
</script>

<style lang="less" scoped>
.runtime {
  font-style: italic;
  font-size: x-small;
}
.dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
}

.status {
  &.DRAFT {
    color: gray;
    .dot {
      background-color: gray;
    }
  }

  &.PENDING {
    color: gray;
    .dot {
      background-color: gray;
    }
  }

  &.RUNNING {
    color: #ffdb58;
    .dot {
      background-color: #ffdb58;
    }
  }
}

.outcome {
  &.WIN {
    color: green;
    .dot {
      background-color: green;
    }
  }

  &.LOSS {
    color: red;
    .dot {
      background-color: red;
    }
  }

  &.DRAW {
    color: blue;
    .dot {
      background-color: blue;
    }
  }

  &.DNF {
    color: gray;
    .dot {
      background-color: gray;
    }
  }
}

.meta {
  text-align: left;
}
</style>
