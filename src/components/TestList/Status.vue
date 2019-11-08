<template>
  <div class="test-status">
    <div v-if="status === 'STOPPED'" :class="['outcome', outcome]">
      <span :class="['dot', outcome]"></span>
      <span class="status-text">{{ outcome }}</span>

      <div class="started-at">
        <span>{{ startedAt | moment("MMM D YYYY") }}</span>
      </div>
      <div class="runtime">
        Ran for {{ $moment(stoppedAt).diff(startedAt) | moment("D") }} days
      </div>
    </div>
    <div v-else :class="['status', status]">
      <span :class="['dot', status]"></span>
      <span class="status-text">{{ status }}</span>
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
  name: "Status",
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
.test-status {
  text-align: left;
}
.started-at {
  margin-top: 5px;
  color: #777;
  font-size: 0.8em;
}
.runtime {
  font-style: italic;
  font-size: 0.7em;
  margin-top: 3px;
  color: #777;
}
.dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
.status-text {
  font-size: 0.9em;
  vertical-align: middle;
  font-weight: bold;
}

.status {
  &.DRAFT {
    .status-text {
      color: gray;
    }
    .dot {
      background-color: gray;
    }
  }

  &.PENDING {
    .status-text {
      color: gray;
    }
    .dot {
      background-color: gray;
    }
  }

  &.RUNNING {
    .status-text {
      color: #b09241;
    }
    .dot {
      background-color: #b09241;
    }
  }
}

.outcome {
  &.WIN {
    .status-text {
      color: green;
    }
    .dot {
      background-color: green;
    }
  }

  &.LOSS {
    .status-text {
      color: red;
    }
    .dot {
      background-color: red;
    }
  }

  &.DRAW {
    .status-text {
      color: blue;
    }
    .dot {
      background-color: blue;
    }
  }

  &.DNF {
    .status-text {
      color: gray;
    }
    .dot {
      background-color: gray;
    }
  }
}

.meta {
  text-align: left;
}
</style>
