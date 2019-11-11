<template>
  <div>
    <TopNav />
    <div class="test-list">
      <h1>All Tests</h1>
      <table class="list">
        <thead>
          <tr>
            <th>Status</th>
            <th>Test</th>
            <th>Variations</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="test in tests" :key="test.id">
            <td>
              <Status
                :status="test.status"
                :outcome="test.outcome"
                :createdAt="test.created_at"
                :updatedAt="test.updated_at"
                :startedAt="test.started_at"
                :finishedAt="test.stopped_at"
              />
            </td>
            <td>
              <div class="name">{{ test.name }}</div>
              <div class="desc">{{ test.hypothesis }}</div>
            </td>
            <td>
              <Variations :variations="test.variations" />
            </td>
            <td>
              <router-link :to="{ name: 'test', params: { id: test.id } }">
                View
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Status from "../components/TestList/Status";
import Variations from "../components/TestList/Variations";
import TopNav from "../components/TopNav";

export default {
  name: "TestList.vue",
  components: { Status, Variations, TopNav },
  data() {
    return {
      tests: []
    };
  },
  mounted() {
    const baseURI = process.env.VUE_APP_API_ENDPOINT + "/tests";
    this.$http.get(baseURI).then(result => {
      this.tests = result.data;
    });
  }
};
</script>

<style lang="less" scoped>
.test-list {
  text-align: left;
  padding: 10px;
}

.name {
  font-size: 1.4em;
  margin-bottom: 5px;
}
.desc {
  font-size: 0.9em;
}
table {
  border-spacing: 0;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #f0f0f0;
    padding: 15px;
    margin: 0;
    vertical-align: top;
  }
  th {
    background: #f5f5f5;
  }
}
</style>
