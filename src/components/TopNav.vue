<template>
  <nav>
    <div class="logo">
      <img src="/img/icons/android-chrome-192x192.png" />
      AB Crusher
    </div>
    <router-link to="/tests">Tests</router-link> |
    <router-link to="/insights">Insights</router-link> |
    <router-link to="/metrics">Metrics</router-link>
  </nav>
</template>

<style lang="less" scoped>
nav {
  padding: 10px;
  background: #2c3e50;

  .logo {
    display: inline-block;
    vertical-align: middle;
    color: #42b983;
    font-weight: bold;
    margin-right: 30px;
    font-size: 1.2em;

    img {
      width: 40px;
      vertical-align: middle;
    }
  }

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #9bb98e;
    }
  }
}
</style>
