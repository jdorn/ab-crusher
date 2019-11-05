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
        <Status
          :status="test.status"
          :outcome="test.outcome"
          :createdAt="test.created_at"
          :updatedAt="test.updated_at"
          :startedAt="test.started_at"
          :finishedAt="test.stopped_at"
        />
        <div class="name-and-desc">
          <div class="name">{{ test.name }}</div>
          <div class="desc">{{ test.description }}</div>
        </div>
        <Variations :variations="test.variations" />
        <router-link :to="{ name: 'test', params: { id: test.id } }">
          Results
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../components/TestList/Status";
import Variations from "../components/TestList/Variations";
export default {
  name: "TestList.vue",
  components: { Status, Variations },
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
