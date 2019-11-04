<template>
  <div class="test-list">
    <h1>List of Tests</h1>
    <ul class="tests">
      <li class='test' v-for="test in tests" :value="test.value" :key="test.value">
        <div class='status'>
          {{test.status}}
          {{test.started_at}}
        </div>
        <div class='name-and-desc'>
          {{test.name}}
          {{test.description}}
        </div>
        <div class='groups'>

        </div>
        <div class='results'>
          Results
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TestList.vue",
    data() {
      return {
        tests: [
          {
            id: 't-1',
            name: 'Button color test',
            status: 'RUNNING',
            description: 'Seeing if a green button performs better than a red button',
            hypothesis: "A green button will draw user's attention more and cause click-through to increase",
            created_at: '2019-11-01T18:32:13Z',
            updated_at: '2019-11-02T18:32:13Z',
            started_at: '2019-11-03T18:32:13Z',
            stopped_at: '2019-11-04T18:32:13Z',
          },
          {
            id: 't-2',
            name: 'Button size test',
            status: 'STOPPED',
            description: 'Seeing if a large button performs better than a smaller button',
            hypothesis: "A large button will draw a user's attention more and cause click-through to increase",
            created_at: '2019-10-01T18:32:13Z',
            updated_at: '2019-10-02T18:32:13Z',
            started_at: '2019-10-03T18:32:13Z',
            stopped_at: '2019-10-04T18:32:13Z'
          }
        ]
      }
    }
  }
</script>

<style>

<style>