<template>
  <div class="test-list">
    <h1>List of Tests</h1>
    <div class="tests">
      <div
        class="test"
        v-for="test in tests"
        :value="test.value"
        :key="test.value"
      >
        <div class="meta">
          <div
            v-if="test.status === 'STOPPED'"
            :class="['outcome', test.outcome]"
          >
            <span :class="['dot', test.outcome]"></span>
            {{ test.outcome }}
          </div>
          <div v-else :class="['status', test.status]">
            <span :class="['dot', test.status]"></span>
            {{ test.status }}
          </div>
          <div class="started-at">
            <span>{{ test.started_at | moment("MMM D YYYY") }}</span>
          </div>
        </div>
        <div class="name-and-desc">
          <div class="name">{{ test.name }}</div>
          <div class="desc">{{ test.description }}</div>
        </div>
        <div class="groups"></div>
        <router-link :to="{ name: 'test', params: { id: test.id } }">
          Results
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestList.vue",
  data() {
    return {
      tests: [
        {
          id: "t-1",
          name: "Button color test",
          status: "RUNNING",
          description:
            "Seeing if a green button performs better than a red button",
          hypothesis:
            "A green button will draw user's attention more and cause click-through to increase",
          outcome: "",
          created_at: "2019-11-01T18:32:13Z",
          updated_at: "2019-11-02T18:32:13Z",
          started_at: "2019-11-03T18:32:13Z",
          stopped_at: "2019-11-04T18:32:13Z"
        },
        {
          id: "t-2",
          name: "Button size test",
          status: "STOPPED",
          description:
            "Seeing if a large button performs better than a smaller button",
          hypothesis:
            "A large button will draw a user's attention more and cause click-through to increase",
          outcome: "WIN",
          created_at: "2019-10-01T18:32:13Z",
          updated_at: "2019-10-02T18:32:13Z",
          started_at: "2019-10-03T18:32:13Z",
          stopped_at: "2019-10-04T18:32:13Z"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.test {
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.name-and-desc {
  text-align: left;
}

.name {
  font-size: x-large;
}
</style>
