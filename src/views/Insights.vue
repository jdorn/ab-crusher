<template>
  <div>
    <TopNav />
    <div class="insights">
      <h1>Insights</h1>
      <table>
        <thead>
          <tr>
            <th>Insight</th>
            <th>Votes</th>
            <th>Evidence</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(insight, i) in insights" :key="i">
            <td>{{ insight.insight }}</td>
            <td>{{ insight.votes }}</td>
            <td>
              <template v-for="(link, j) in insight.links">
                <span v-if="j" :key="'comma' + j">, </span>
                <router-link :to="link.url" :key="j">{{
                  link.display
                }}</router-link>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="less">
.insights {
  padding: 10px;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  margin-left: 20px;

  td,
  th {
    border: 1px solid #f0f0f0;
    padding: 15px;
    margin: 0;

    &.no-padding {
      padding: 0;
    }
  }
  th {
    background: #f5f5f5;
  }
}
</style>

<script>
import TopNav from "../components/TopNav";
export default {
  components: {
    TopNav
  },
  data() {
    return {
      insights: []
    };
  },
  mounted() {
    const baseURI = process.env.VUE_APP_API_ENDPOINT + "/insights";
    this.$http.get(baseURI).then(result => {
      this.insights = result.data;
    });
  }
};
</script>
