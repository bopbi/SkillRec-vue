<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <br />
        <h1 class="title is-3">{{ msg }}</h1>
        <ul class="users-list">
          <li v-for="user in users"
            class="user subtitle is-3" :key="user.id">
            <router-link :to="{ name: 'UserDetail', params: { id: user.id }}">{{ user.name }}</router-link>
          </li>
        </ul>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      msg: 'User List',
      users: [],
    };
  },
  created() {
    this.$http.get('api/users').then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
