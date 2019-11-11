<template>
  <nav>
    <div class="logo">
      <img src="/img/icons/android-chrome-192x192.png" />
      AB Crusher
    </div>
    <div class="links">
      <router-link to="/tests">Tests</router-link>
      <router-link to="/insights">Insights</router-link>
      <router-link to="/present?testIds=t_123abc">Present</router-link>
    </div>
  </nav>
</template>

<style lang="less" scoped>
nav {
  padding: 5px 20px;
  background: #2c3e50;
  color: #ddd;
  text-align: left;
  display: flex;
  line-height: 40px;

  @media (max-width: 500px) {
    padding: 5px 10px;
  }

  .logo {
    display: inline-block;
    font-weight: bold;
    margin-right: 30px;
    font-size: 1.2em;

    @media (max-width: 500px) {
      margin-right: 15px;
    }

    img {
      width: 40px;
      vertical-align: middle;
    }
  }

  .links {
    flex: 1;
  }

  a {
    color: #ddd;
    padding: 0 6px;
    margin: 0 6px;
    text-decoration: none;

    @media (max-width: 500px) {
      margin: 0 3px;
    }

    &.router-link-exact-active {
      color: #5fd3bc;
      font-weight: bold;
    }
  }
}
</style>
